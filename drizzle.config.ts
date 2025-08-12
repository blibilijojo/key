import type { Config } from 'drizzle-kit';

export default {
  schema: './database/schema.ts',
  out: './database/migrations',
  driver: 'libsql',
  dbCredentials: {
    url: './database/main.db',
  },
  verbose: true,
  strict: true,
} satisfies Config;
