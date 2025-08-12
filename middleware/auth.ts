import { Context, Next } from 'hono/mod.ts';

const API_KEY = 'your-secret-api-key'; // In a real app, use environment variables!

export const auth = async (c: Context, next: Next) => {
  const apiKey = c.req.header('X-API-KEY');
  if (apiKey !== API_KEY) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  await next();
};
