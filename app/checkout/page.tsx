import { cookies } from 'next/headers.js';
import { getProductsByIdsInsecure } from '../../database/products';
import { calculateOrderTotal } from '../../util/calculateOrderTotal';
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
  // Get Cart items from cookie
  const cartItemsCookie = (await cookies()).get('cart');
  const cartItems: CartItem[] = !cartItemsCookie
    ? []
    : (JSON.parse(cartItemsCookie.value) as CartItem[]);

  // Get product data from database
  const productIds = cartItems.map((item) => item.id);
  const products = await getProductsByIdsInsecure(productIds);

  // Combine cart items with product data from database
  const cartWithDetails = cartItems.map((item) => {
    const cartProduct = products.find((product) => product.id === item.id);
    return {
      ...item,
      name: cartProduct?.name ?? 'Unknown Product',
      price: Number(cartProduct?.price ?? 0),
    };
  });

  // Order total calculation
  const totalPrice = calculateOrderTotal(cartWithDetails);

  return (
    <div>
      <h1 className={styles.CheckoutHeadline}>Checkout</h1>

      <CheckoutForm orderTotal={totalPrice} />
    </div>
  );
}
