import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const BASE_PATH = '/security-plus-study-hub';
const PORT = Number(process.env.E2E_PORT ?? '4173');
const DIST_DIR = path.resolve(process.cwd(), 'dist');

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8'
};

if (!fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
  console.error(`Missing dist/index.html at ${DIST_DIR}. Run "npm run build" first.`);
  process.exit(1);
}

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url ?? '/', `http://127.0.0.1:${PORT}`);
  const pathname = decodeURIComponent(urlObj.pathname);

  if (pathname === BASE_PATH) {
    res.writeHead(302, { Location: `${BASE_PATH}/` });
    res.end();
    return;
  }

  if (!pathname.startsWith(`${BASE_PATH}/`)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found outside GitHub Pages base path /security-plus-study-hub/');
    return;
  }

  const rel = pathname.slice(BASE_PATH.length + 1);
  const targetRel = rel === '' ? 'index.html' : rel;
  const resolved = path.resolve(DIST_DIR, targetRel);

  if (!resolved.startsWith(DIST_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  if (!fs.existsSync(resolved) || fs.statSync(resolved).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Not found: ${pathname}`);
    return;
  }

  const ext = path.extname(resolved).toLowerCase();
  const contentType = MIME_TYPES[ext] ?? 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(resolved).pipe(res);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Static base-path server listening on http://127.0.0.1:${PORT}${BASE_PATH}/`);
});

process.on('SIGINT', () => {
  server.close(() => process.exit(0));
});
process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
