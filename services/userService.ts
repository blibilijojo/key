import type { User } from "../schemas/userSchemas.ts";

// In a real application, this would fetch data from a database.
const mockUsers: User[] = [
  { id: 1, name: "Deno" },
  { id: 2, name: "Hono" },
];

export const getUserById = (id: number): User | undefined => {
  return mockUsers.find(user => user.id === id);
}; 
