import type { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(50) NOT NULL,
      description varchar(200) NOT NULL,
      price numeric(10, 2) NOT NULL,
      stock integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE products`;
}
