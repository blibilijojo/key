import { drizzle } from 'https://deno.land/x/drizzle_orm@0.30.10/postgres-js/index.ts';
import postgres from 'npm:postgres';
import { dbConfig } from './config.ts';

// Create the client
const queryClient = postgres(dbConfig.url);

// Create the Drizzle instance
export const db = drizzle(queryClient);
