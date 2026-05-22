function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function splitMathText(value) {
  const nodes = [];
  const mathPattern = /\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)/g;
  let cursor = 0;

  for (const match of value.matchAll(mathPattern)) {
    if (match.index > cursor) {
      nodes.push({ type: 'text', value: value.slice(cursor, match.index) });
    }

    const isDisplay = Boolean(match[1]);
    const content = escapeHtml((match[1] ?? match[2]).trim());
    nodes.push({
      type: 'html',
      value: `<span class="${isDisplay ? 'math-display' : 'math-inline'}">${content}</span>`
    });
    cursor = match.index + match[0].length;
  }

  if (cursor < value.length) nodes.push({ type: 'text', value: value.slice(cursor) });
  return nodes;
}

function isLikelyMath(content) {
  return /\\[a-zA-Z]+|[_^][A-Za-z{\\]|\d\s*[+\-*/=<>]\s*\d|[A-Za-z]\s*=/.test(content);
}

function splitRenderedMathText(value) {
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
      if (start > cursor) nodes.push({ type: 'text', value: value.slice(cursor, start) });
      nodes.push({
        type: 'html',
        value: `<span class="math-inline">${escapeHtml(content.trim())}</span>`
      });
      cursor = end + 1;
    }

    index = end + 1;
  }

  if (cursor === 0) return null;
  if (cursor < value.length) nodes.push({ type: 'text', value: value.slice(cursor) });
  return nodes;
}

function visitChildren(node) {
  if (!node || !Array.isArray(node.children)) return;

  const nextChildren = [];
  for (const child of node.children) {
    if (child.type === 'text' && /\\\[|\\\(/.test(child.value)) {
      nextChildren.push(...splitMathText(child.value));
    } else if (child.type === 'text' && /[()]/.test(child.value)) {
      const mathNodes = splitRenderedMathText(child.value);
      nextChildren.push(...(mathNodes ?? [child]));
    } else {
      visitChildren(child);
      nextChildren.push(child);
    }
  }
  node.children = nextChildren;
}

export default function remarkMathDelimiters() {
  return (tree) => visitChildren(tree);
}
