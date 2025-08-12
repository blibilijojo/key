import type { Config } from 'drizzle-kit';

export default {
  schema: './database/schema.ts',
  out: './database/migrations',
  driver: 'libsql',
  dbCredentials: {
    url: Deno.env.get("DATABASE_URL")!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
