import { cache } from 'react';
import { sql } from '../database/connect.ts';

/* Database entry example:
  {
    id: 1,
    name: 'Snake Plant',
    description:
      'A hardy and low-maintenance indoor plant that purifies the air.',
    price: 19.99,
    stock: 20,
  },*/

export const getProductsInsecure = cache(async () => {
  const products = await sql`
    SELECT * FROM products
    `;
  return products;
});

export const getProductInsecure = cache(async (id: number) => {
  const [product] = await sql`
    SELECT * FROM products WHERE id=${id}
    `;
  return product;
});
