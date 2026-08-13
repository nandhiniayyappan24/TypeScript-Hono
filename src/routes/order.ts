import { Hono } from 'hono';
import { calculateTotal, isEligibleForFreeShipping } from '../services/orderService.js';

export const orderRoutes = new Hono();

orderRoutes.get('/total', (c) => {
  const quantity = Number(c.req.query('quantity') ?? '0');
  const unitPrice = Number(c.req.query('unitPrice') ?? '0');
  const discount = Number(c.req.query('discount') ?? '0');
  return c.json({ total: calculateTotal(quantity, unitPrice, discount) });
});

orderRoutes.get('/free-shipping', (c) => {
  const total = Number(c.req.query('total') ?? '0');
  return c.json({ eligible: isEligibleForFreeShipping(total) });
});
