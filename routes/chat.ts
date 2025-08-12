import { Hono } from 'https://deno.land/x/hono/mod.ts';
import { zValidator } from 'hono_zod_validator/mod.ts';
import { chatRequestSchema } from '../utils/zodSchemas.ts';
import { getAvailableKey } from '../services/keyProvider.ts';

const chatRoutes = new Hono();

chatRoutes.post('/', zValidator('json', chatRequestSchema), async (c) => {
  const { model, messages } = c.req.valid('json');

  // 1. 获取一个可用的 key
  const key = await getAvailableKey(model);

  if (!key) {
    return c.json({ error: `No available keys for model: ${model}` }, 500);
  }

  // 在这里，您可以添加调用外部 API (如 Gemini) 的逻辑
  // 为了演示，我们只返回一个模拟的成功响应

  console.log(`Routing request for model '${model}' with key ID: ${key.id}`);

  // 模拟的响应
  const proxiedResponse = {
    key_used: key.value,
    requested_model: model,
    response_message: {
      role: 'assistant',
      content: 'This is a proxied response.',
    },
  };

  return c.json({
    status: 'ok',
    proxied_response: proxiedResponse,
  });
});

export default chatRoutes;
