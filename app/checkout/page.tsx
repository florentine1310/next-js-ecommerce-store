import { cookies } from 'next/headers.js';
import CheckoutForm from './CheckoutForm';
import styles from './page.module.scss';

export const metadata = {
  title: 'Checkout',
  description: 'Plantify checkout page',
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default async function CheckoutPage() {
  const cartItemsCookie = (await cookies()).get('cart');

  const cartItems: CartItem[] = !cartItemsCookie
    ? []
    : (JSON.parse(cartItemsCookie.value) as CartItem[]);

  // Total Price calculation

  const totalPrice: number = Number(
    cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2),
  );

  return (
    <div>
      <h1 className={styles.CheckoutHeadline}>Checkout</h1>

      <CheckoutForm orderTotal={totalPrice} />
    </div>
  );
}
