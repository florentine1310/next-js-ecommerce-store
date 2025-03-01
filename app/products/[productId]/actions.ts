'use server';

import { cookies } from 'next/headers';
import addOrUpdateCookieItem from '../../../util/addOrUpdateCookieItem';
import { parseJson } from '../../../util/json';

export type CartCookie = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export async function createCookie(cookieValue: CartCookie) {
  // 1. Get existing cookie

  const cartItemsCookie = (await cookies()).get('cart');

  // 2. Parse cookie value

  const cartItems = !cartItemsCookie
    ? []
    : parseJson(cartItemsCookie.value) || [];

  // 3. Set or update cookie value

  const cookieArray = addOrUpdateCookieItem(cartItems, cookieValue);

  (await cookies()).set({
    name: 'cart',
    value: JSON.stringify(cookieArray),
    httpOnly: true,
    secure: true,
  });
}
