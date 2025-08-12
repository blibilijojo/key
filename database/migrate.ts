import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from './db.ts';

console.log('Running migrations...');

// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: './database/migrations' });

console.log('Migrations completed!');

// Don't forget to close the connection, otherwise the script will hang
Deno.exit(0);
