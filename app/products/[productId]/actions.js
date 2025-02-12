'use server';

import { cookies } from 'next/headers';

export async function createCookie(value) {
  // 1. Get existing cookie

  const cartItemsCookie = (await cookies()).get('cart');

  // 2. Parse cookie value

  const cartItems = !cartItemsCookie ? [] : JSON.parse(cartItemsCookie.value);

  // 3. Find cookie value

  const itemToUpdate = cartItems.find((cartItem) => {
    return cartItem.id === value.id;
  });

  if (!itemToUpdate) {
    cartItems.push({
      id: value.id,
      name: value.name,
      price: value.price,
      quantity: value.quantity,
    });
  } else {
    itemToUpdate.quantity = value.quantity;
  }
  (await cookies()).set('cart', JSON.stringify(cartItems));
}
