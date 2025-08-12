import 'https://deno.land/std@0.224.0/dotenv/load.ts';

export const dbConfig = {
  url: `postgres://${Deno.env.get("DB_USER")}:${Deno.env.get("DB_PASSWORD")}@${Deno.env.get("DB_HOST")}:${Deno.env.get("DB_PORT")}/${Deno.env.get("DB_NAME")}`,
};
