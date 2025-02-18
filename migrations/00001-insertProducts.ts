import type { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    description:
      'A hardy and low-maintenance indoor plant that purifies the air.',
    price: 19.99,
    stock: 20,
  },
  {
    id: 2,
    name: 'Fiddle Leaf Fig ',
    description:
      'A trendy and striking plant with large, glossy leaves perfect for home décor. ',
    price: 50.0,
    stock: 4,
  },
  {
    id: 3,
    name: 'Pothos',
    description:
      'An easy-to-care-for vine plant with trailing green leaves, ideal for beginners.',
    price: 15.0,
    stock: 50,
  },
  {
    id: 4,
    name: 'Monstera Deliciosa',
    description:
      'Known for its large, unique split leaves, it`s a bold statement plant for any room. ',
    price: 40.0,
    stock: 17,
  },
  {
    id: 5,
    name: 'Aloe Vera',
    description:
      'A succulent known for its healing properties, perfect for sunny spots.',
    price: 13.0,
    stock: 35,
  },
  {
    id: 6,
    name: 'Peace Lily ',
    description:
      'A beautiful flowering plant with white blooms and air-purifying qualities. ',
    price: 30.0,
    stock: 13,
  },
  {
    id: 7,
    name: 'ZZ Plant',
    description:
      'A resilient plant with waxy, hearty leaves that thrive in low-light conditions. ',
    price: 25.0,
    stock: 28,
  },
  {
    id: 8,
    name: 'Spider Plant',
    description:
      'A fast-growing, easy-care plant with arching green and white striped leaves. ',
    price: 17.0,
    stock: 33,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (
          name,
          description,
          price,
          stock
        )
      VALUES
        (
          ${product.name},
          ${product.description},
          ${product.price},
          ${product.stock}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
