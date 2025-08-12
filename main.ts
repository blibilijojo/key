import { Hono, Context } from "hono/mod.ts";
import userRoutes from "./routes/userRoutes.ts";
import chatRoutes from "./routes/chat.ts";
import { log } from "./middleware/logging.ts";
import { auth } from "./middleware/auth.ts";

const app = new Hono();

// Apply global logging middleware
app.use("*", log);

// --- Public Routes ---
app.get("/", (c: Context) => {
  return c.text("Hello! This is the root of the Deno project.");
});
app.route("/users", userRoutes);

// --- Protected Routes ---
// Apply auth middleware specifically to chat routes
app.use("/chat/*", auth);
app.route("/chat", chatRoutes);

console.log("✅ Server running on http://localhost:8000");

Deno.serve(app.fetch);
export default app;

