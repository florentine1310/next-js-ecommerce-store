import { cache } from 'react';
import { sql } from '../database/connect';
import type { Product } from '../migrations/00000-createTableProducts';

/* Database entry example:
  {
    id: 1,
    name: 'Snake Plant',
    description:
      'A hardy and low-maintenance indoor plant that purifies the air.',
    price: 19.99,
    stock: 20,
  },*/

// Get all products
export const getProductsInsecure = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;
  return products;
});

// Get product by ID
export const getProductInsecure = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});

export const getProductsByIdsInsecure = cache(async (ids: number[]) => {
  if (ids.length === 0) return [];

  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ANY (
        ${ids}
      )
  `;

  return products;
});
