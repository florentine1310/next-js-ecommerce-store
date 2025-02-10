import Link from 'next/link';
import CheckoutButton from '../components/CheckoutButton';

export default function CartPage() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <Link href="/checkout">
        <CheckoutButton />
      </Link>
    </div>
  );
}
