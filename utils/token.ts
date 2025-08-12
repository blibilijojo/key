import { sign } from 'hono/jwt';

// biome-ignore lint/suspicious/noExplicitAny:
export const createToken = async (payload: any) => {
  const secret = Deno.env.get('JWT_SECRET') ?? 'your-secret-key-here';
  const token = await sign(payload, secret);

  return token;
};