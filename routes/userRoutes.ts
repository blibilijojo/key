import { Hono } from "hono/mod.ts";
import { getUserById } from "../services/userService.ts";

const userRoutes = new Hono();

userRoutes.get("/:id{[0-9]+}", (c) => {
  const id = parseInt(c.req.param("id"));
  const user = getUserById(id);

  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json(user);
});

export default userRoutes;
