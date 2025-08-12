import { db } from '../database/connection.ts';
import { keys } from '../database/schema.ts';
import { sql } from 'npm:drizzle-orm';

/**
 * 从数据库中随机获取一个指定模型的可用密钥。
 * @param model - The model for which to get a key (e.g., 'gemini')
 * @returns A promise that resolves to the key object or null if none are available.
 */
export async function getAvailableKey(model: string) {
  const result = await db
    .select()
    .from(keys)
    .where(sql`${keys.model} = ${model}`)
    .orderBy(sql`RANDOM()`)
    .limit(1);

  if (result.length === 0) {
    return null;
  }
  
  return result;
}
