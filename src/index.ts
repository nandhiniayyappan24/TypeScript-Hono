import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { orderRoutes } from './routes/order';
import { describeVersion } from './services/versionSignature';

const app = new Hono();

app.get('/', (c) =>
  c.json({
    project: 'Hono Edge Backend Service (Bun/Deno/Cloudflare Workers)',
    branch: 'ts5.2',
    typescript: '5.2.2',
    health: '/health',
  }),
);

app.get('/health', (c) =>
  c.json({
    status: 'healthy',
    branch: 'ts5.2',
    typescript: '5.2.2',
    version: describeVersion(),
  }),
);

app.route('/orders', orderRoutes);

const port = Number(process.env.PORT ?? 3000);
console.log(`Hono server listening on http://localhost:${port}`);

serve({ fetch: app.fetch, port });

export default app;
