import { expect, test } from '@jest/globals';
import reduceCookieValue from '../reduceCookieValue';

test('reduce product data and quantity to right cookie value', () => {
  const selectedProduct = {
    id: 1,
    name: 'Snake Plant',
    description:
      'A hardy and low-maintenance indoor plant that purifies the air.',
    price: '19.99',
    stock: 20,
  };
  const quantity = 5;

  expect(reduceCookieValue(selectedProduct, quantity)).toStrictEqual({
    id: 1,
    name: 'Snake Plant',
    price: 19.99,
    quantity: 5,
  });
});

test('throws an error when a negative quantity is passed', () => {
  const selectedProduct = {
    id: 1,
    name: 'Snake Plant',
    description:
      'A hardy and low-maintenance indoor plant that purifies the air.',
    price: '19.99',
    stock: 20,
  };
  const negativeQuantity = -5;

  expect(() => reduceCookieValue(selectedProduct, negativeQuantity)).toThrow(
    'No negative quantity allowed',
  );
});
