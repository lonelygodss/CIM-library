const rawBasePath = import.meta.env.BASE_URL ?? '/';

export const basePath = rawBasePath === '/' ? '' : rawBasePath.replace(/\/$/, '');

const hasProtocol = /^[a-z][a-z\d+.-]*:/i;

export function sitePath(path = '/') {
  if (!path) return basePath || '/';
  if (path.startsWith('#') || path.startsWith('//') || hasProtocol.test(path)) return path;

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}` || '/';
}

export function routePath(path = '/') {
  if (!basePath) return path || '/';
  if (path === basePath) return '/';
  if (path.startsWith(`${basePath}/`)) return path.slice(basePath.length) || '/';
  return path || '/';
}
