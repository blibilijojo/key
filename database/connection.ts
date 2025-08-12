import { drizzle } from 'npm:drizzle-orm/postgres-js';
import postgres from 'npm:postgres';
import { dbConfig } from './config.ts';

// Create the client
const queryClient = postgres(dbConfig.url);

// Create the Drizzle instance
export const db = drizzle(queryClient);
