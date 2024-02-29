import { serve } from 'https://deno.land/std/http/server.ts';

const server = serve({ port: 8000 });
console.log('Server running on http://localhost:8000');

for (const req of server) {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    req.respond({ body: 'Hello from Deno backend!' });
  } else {
    req.respond({ status: 404 });
  }
}
