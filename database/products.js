const products = [
  {
    id: 1,
    name: 'Snake Plant',
    description:
      'A hardy and low-maintenance indoor plant that purifies the air.',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Fiddle Leaf Fig',
    description:
      'A trendy and striking plant with large, glossy leaves perfect for home décor.',
    price: 49.99,
  },
  {
    id: 3,
    name: 'Pothos',
    description:
      'An easy-to-care-for vine plant with trailing green leaves, ideal for beginners.',
    price: 14.99,
  },
  {
    id: 4,
    name: 'Monstera Deliciosa',
    description:
      "Known for its large, unique split leaves, it's a bold statement plant for any room.",
    price: 39.99,
  },
  {
    id: 5,
    name: 'Aloe Vera',
    description:
      'A succulent known for its healing properties, perfect for sunny spots.',
    price: 12.99,
  },
  {
    id: 6,
    name: 'Peace Lily',
    description:
      'A beautiful flowering plant with white blooms and air-purifying qualities.',
    price: 29.99,
  },
  {
    id: 7,
    name: 'ZZ Plant',
    description:
      'A resilient plant with waxy, hearty leaves that thrive in low-light conditions.',
    price: 24.99,
  },
  {
    id: 8,
    name: 'Spider Plant',
    description:
      'A fast-growing, easy-care plant with arching green and white striped leaves.',
    price: 16.99,
  },
];

export function getProducts() {
  return products;
}
export function getProduct(id) {
  return products.find((product) => product.id === id);
}
