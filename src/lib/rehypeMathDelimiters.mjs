function textNode(value) {
  return { type: 'text', value };
}

function mathNode(content, display = false) {
  return {
    type: 'element',
    tagName: 'span',
    properties: { className: [display ? 'math-display' : 'math-inline'] },
    children: [textNode(content.trim())]
  };
}

function isLikelyMath(content) {
  return /\\[a-zA-Z]+|[_^][A-Za-z{\\]|\d\s*[+\-*/=<>]\s*\d|[A-Za-z]\s*=/.test(content);
}

function splitExplicitMath(value) {
  const nodes = [];
  const mathPattern = /\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)/g;
  let cursor = 0;

  for (const match of value.matchAll(mathPattern)) {
    if (match.index > cursor) nodes.push(textNode(value.slice(cursor, match.index)));
    nodes.push(mathNode(match[1] ?? match[2], Boolean(match[1])));
    cursor = match.index + match[0].length;
  }

  if (cursor === 0) return null;
  if (cursor < value.length) nodes.push(textNode(value.slice(cursor)));
  return nodes;
}

function splitRenderedMath(value) {
  const nodes = [];
  let cursor = 0;
  let index = 0;

  while (index < value.length) {
    const start = value.indexOf('(', index);
    if (start === -1) break;

    let depth = 0;
    let end = -1;
    for (let position = start; position < value.length; position += 1) {
      if (value[position] === '(') depth += 1;
      if (value[position] === ')') {
        depth -= 1;
        if (depth === 0) {
          end = position;
          break;
        }
      }
    }

    if (end === -1) break;

    const raw = value.slice(start + 1, end);
    const doubleWrapped = raw.startsWith('(') && raw.endsWith(')');
    const content = doubleWrapped ? raw.slice(1, -1) : raw;
    if (isLikelyMath(content) || doubleWrapped) {
      if (start > cursor) nodes.push(textNode(value.slice(cursor, start)));
      nodes.push(mathNode(content));
      cursor = end + 1;
    }

    index = end + 1;
  }

  if (cursor === 0) return null;
  if (cursor < value.length) nodes.push(textNode(value.slice(cursor)));
  return nodes;
}

function splitRenderedDisplayMath(value) {
  const match = value.match(/^\s*\[([\s\S]+)\]\s*$/);
  if (!match) return null;

  const content = match[1].trim();
  if (!content || !isLikelyMath(content)) return null;
  return [mathNode(content, true)];
}

function visitChildren(node) {
  if (!node || !Array.isArray(node.children)) return;

  if (node.tagName === 'p' && node.children.every((child) => child.type === 'text')) {
    const text = node.children.map((child) => child.value).join('');
    const displayNodes = splitRenderedDisplayMath(text);
    if (displayNodes) {
      node.children = displayNodes;
      return;
    }
  }

  const nextChildren = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      nextChildren.push(...(
        splitExplicitMath(child.value) ??
        splitRenderedDisplayMath(child.value) ??
        splitRenderedMath(child.value) ??
        [child]
      ));
    } else {
      visitChildren(child);
      nextChildren.push(child);
    }
  }
  node.children = nextChildren;
}

export default function rehypeMathDelimiters() {
  return (tree) => visitChildren(tree);
}
