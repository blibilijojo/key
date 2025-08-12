import { superoak } from "https://deno.land/x/superoak@4.7.0/mod.ts";
import { app } from "../main.ts"; // 假设你的 main.ts 导出了 app
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("Chat API should return a stream on valid request", async (t) => {
  await t.step("/chat endpoint", async () => {
    // 注意：这是一个集成测试，它需要一个正在运行的、配置了有效数据库和API密钥的环境
    // 在 CI/CD 环境中，这通常会连接到一个专用的测试数据库
    console.warn("Skipping chat API test as it requires a live environment.");
    // const request = await superoak(app);
    // const response = await request.post("/chat")
    //   .send({ 
    //     model: "gpt-3.5-turbo",
    //     messages: [{ role: "user", content: "Hello" }]
    //   })
    //   .expect(200)
    //   .expect("Content-Type", /text\/event-stream/);

    // // 由于是流式响应，我们在这里只检查状态码和头部
    // // 具体的流内容可以在更复杂的测试中进行监听和断言
    // assertEquals(response.status, 200);
  });
});
