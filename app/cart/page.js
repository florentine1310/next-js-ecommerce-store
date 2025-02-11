import { cookies } from 'next/headers';
import Link from 'next/link';
import CheckoutButton from './CheckoutButton';

export default async function CartPage() {
  const cartItems = (await cookies()).get('cartItems');
  return (
    <div>
      <h1>Shopping Cart</h1>
      <Link href="/checkout">
        <CheckoutButton />
      </Link>
    </div>
  );
}
