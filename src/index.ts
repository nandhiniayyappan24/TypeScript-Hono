import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { orderRoutes } from './routes/order.js';
import { describeVersion } from './services/versionSignature.js';

const app = new Hono();

app.get('/', (c) =>
  c.json({
    project: 'Hono Edge Backend Service (Bun/Deno/Cloudflare Workers)',
    branch: 'ts5.3',
    typescript: '5.3.3',
    health: '/health',
  }),
);

app.get('/health', (c) =>
  c.json({
    status: 'healthy',
    branch: 'ts5.3',
    typescript: '5.3.3',
    version: describeVersion(),
  }),
);

app.route('/orders', orderRoutes);

const port = Number(process.env.PORT ?? 3000);
console.log(`Hono server listening on http://localhost:${port}`);

serve({ fetch: app.fetch, port });

export default app;
