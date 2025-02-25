import { cookies } from 'next/headers';
import Link from 'next/link';
import CartItemRemoveButton from './CartItemRemoveButton';
import CheckoutButton from './CheckoutButton';
import styles from './page.module.scss';

export const metadata = {
  title: 'Cart',
  description: 'Your Plantify shopping cart',
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default async function CartPage() {
  const cartItemsCookie = (await cookies()).get('cart');

  const cartItems: CartItem[] = !cartItemsCookie
    ? []
    : (JSON.parse(cartItemsCookie.value) as CartItem[]);

  // Totals calculation
  const totalQuantity = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.quantity,
    0,
  );
  const totalPrice = Number(
    cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2),
  );

  return (
    <div>
      <h1 className={styles.ShoppingCartHeadline}>Your Shopping Cart</h1>
      {totalQuantity > 0 ? (
        <div>
          <table className={styles.ShoppingCart}>
            <thead>
              <tr className={styles.ShoppingCartHeader}>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr
                    key={`item-${item.id}`}
                    data-test-id={`cart-product-${item.id}`}
                    className={styles.ShoppingCartContent}
                  >
                    <td> {item.name}</td>
                    <td data-test-id={`cart-product-quantity-${item.id}`}>
                      {item.quantity}
                    </td>
                    <td> {item.price}</td>
                    <td>{(item.quantity * item.price).toFixed(2)}</td>
                    <td>
                      <CartItemRemoveButton itemId={item.id} />
                    </td>
                  </tr>
                );
              })}
              <tr className={styles.ShoppingCartTotals}>
                <td>Total</td>
                <td>{totalQuantity}</td>
                <td />
                <td data-test-id="cart-total">{totalPrice}</td>
              </tr>
            </tbody>
          </table>
          <Link href="/checkout">
            <CheckoutButton />
          </Link>
        </div>
      ) : (
        <h2 className={styles.EmptyCart}>Your shopping cart is empty</h2>
      )}
    </div>
  );
}
