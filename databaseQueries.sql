-- Creating products table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  description varchar(200) NOT NULL,
  price decimal,
  stock bigint
);


-- Inserting into products table
INSERT INTO products (name, description, price, stock)
VALUES
('Peace Lily',
'A beautiful flowering plant with white blooms and air-purifying qualities.',
 29.99,
 13),
('Aloe Vera',
'A succulent known for its healing properties, perfect for sunny spots.',
12.99,
35),
('ZZ Plant',
'A resilient plant with waxy, hearty leaves that thrive in low-light conditions.',
24.99,
28),
('Spider Plant',
'A fast-growing, easy-care plant with arching green and white striped leaves.',
16.99,
33);


-- Selecting all data from products table
SELECT * FROM products;
