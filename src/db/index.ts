import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

config({ path: '.env' });

const connectionString = process.env.DATABASE_URL || 'postgresql://placeholder';
const sql = neon(connectionString);
export const db = drizzle(sql);
