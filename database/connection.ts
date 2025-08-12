import { drizzle } from 'https://deno.land/x/drizzle_orm@0.30.10/postgres-js/index.ts';
import postgres from 'npm:postgres';
import { dbConfig } from './config.ts';

// Create the client
const queryClient = postgres(Deno.env.get("DATABASE_URL")!);

// Create the Drizzle instance
export const db = drizzle(queryClient);
