import { expect, test } from '@jest/globals';
import addOrUpdateCookieItem from '../addOrUpdateCookieItem';

test('add or update cookie value correctly', () => {
  const cartItems = [
    { id: 1, name: 'item A', quantity: 5 },
    { id: 2, name: 'item B', quantity: 3 },
    { id: 3, name: 'item C', quantity: 1 },
  ];
  const existingCookieValue = {
    id: 2,
    name: 'item B',
    quantity: 3,
  };

  const newCookieValue = { id: 4, name: 'item C', quantity: 2 };

  expect(addOrUpdateCookieItem(cartItems, existingCookieValue)).toStrictEqual([
    { id: 1, name: 'item A', quantity: 5 },
    { id: 2, name: 'item B', quantity: 6 },
    { id: 3, name: 'item C', quantity: 1 },
  ]); // updating quantity when item already exists in cookie

  expect(addOrUpdateCookieItem(cartItems, newCookieValue)).toStrictEqual([
    { id: 1, name: 'item A', quantity: 5 },
    { id: 2, name: 'item B', quantity: 6 },
    { id: 3, name: 'item C', quantity: 1 },
    { id: 4, name: 'item C', quantity: 2 },
  ]); // adding new item to the cookie
});
