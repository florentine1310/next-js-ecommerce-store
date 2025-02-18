import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(50) NOT NULL,
      description varchar(200) NOT NULL,
      price numeric(10, 2),
      stock bigint
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE products`;
}
