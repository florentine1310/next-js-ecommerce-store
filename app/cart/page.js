import { cookies } from 'next/headers';
import Link from 'next/link';
import CartItemRemoveButton from './CartItemRemoveButton';
import CheckoutButton from './CheckoutButton';

export default async function CartPage() {
  const cartItemsCookie = (await cookies()).get('cartItems');

  const cartItems = !cartItemsCookie ? [] : JSON.parse(cartItemsCookie.value);

  // Totals calculation
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = Number(
    cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2),
  );

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr
                key={`item-${item.id}`}
                data-test-id="cart-product-<product id>"
              >
                <td> {item.name}</td>
                <td data-test-id="cart-product-quantity-<product id>">
                  {item.quantity}
                </td>
                <td> {item.price}</td>
                <td>{item.quantity * item.price}</td>
                <td>
                  <CartItemRemoveButton itemId={item.id} />
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td>{totalQuantity}</td>
            <td></td>
            <td data-test-id="cart-total">{totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <Link href="/checkout">
        <CheckoutButton />
      </Link>
    </div>
  );
}
