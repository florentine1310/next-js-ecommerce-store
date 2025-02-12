'use server';

import { cookies } from 'next/headers';

export async function deleteCookie({ itemId }) {
  // 1. Get existing cookie
  const cartItemsCookie = (await cookies()).get('cartItems');

  // 2. Parse cookie value

  const cartItems = !cartItemsCookie ? [] : JSON.parse(cartItemsCookie.value);

  // 3. Find cookie value

  const itemToDelete = cartItems.find((cartItem) => {
    return cartItem.id === itemId;
  });

  if (!itemToDelete) {
    cartItems.pop({ itemToDelete });
  }
  (await cookies()).set('cartItems', JSON.stringify(cartItems));
}
