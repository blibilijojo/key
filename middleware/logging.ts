import { Context, Next } from 'hono/mod.ts';

export const logger = async (c: Context, next: Next) => {
  console.log(`[${c.req.method}] ${c.req.url}`);
  await next();
};
