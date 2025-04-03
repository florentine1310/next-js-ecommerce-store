'use server';

import { cookies } from 'next/headers';
import { parseJson } from '../../util/json';

type CartItem = {
  id: number;
  name: string;
  price: string;
  quantity: number;
};

type Props = {
  productToUpdate: {
    id: number;
    name: string;
    price: string;
  };
};

export async function createOrUpdateCookie(props: Props) {
  // 1. Get existing cookie

  const cartItemsCookie = (await cookies()).get('cart');

  // 2. Parse cookie value

  const cartItems = !cartItemsCookie ? [] : parseJson(cartItemsCookie.value);

  // 3. Find cookie value

  const itemToUpdate = cartItems?.find((cartItem) => {
    return cartItem.id === props.productToUpdate.id;
  });

  if (!itemToUpdate) {
    cartItems?.push({
      id: props.productToUpdate.id,
      name: props.productToUpdate.name,
      price: Number(props.productToUpdate.price),
      quantity: 1,
    });
  } else {
    itemToUpdate.quantity += 1;
  }
  (await cookies()).set({
    name: 'cart',
    value: JSON.stringify(cartItems),
    httpOnly: true,
    secure: true,
  });
}
