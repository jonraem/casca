function handler(_req: Request): Response {
  return new Response("Hello world!");
}

Deno.serve(handler);