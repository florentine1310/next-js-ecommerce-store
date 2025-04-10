import './globals.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: {
    default: 'Home | Plantify',
    template: '%s  | Plantify',
  },
  description: 'Find beautiful house plants online',
};

type Props = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  name: string;
  quantity: number;
};

export default async function RootLayout({ children }: Props) {
  const cartItemsCookie = (await cookies()).get('cart');

  const cartItems: CartItem[] = !cartItemsCookie
    ? []
    : (JSON.parse(cartItemsCookie.value) as CartItem[]);
  const totalQuantity = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.quantity,
    0,
  );

  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <nav>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={90}
                  height={90}
                />
              </Link>
              <Link data-test-id="products-link" href="/products">
                Products
              </Link>
              <Link
                data-test-id="cart-link"
                href="/cart"
                className="ShoppingCart"
              >
                <div className="CartIcon">
                  <Image
                    src="/icons/cart-icon.svg"
                    alt="Logo"
                    width={90}
                    height={90}
                  />
                  {totalQuantity > 0 && (
                    <span data-test-id="cart-count" className="CartBadge">
                      {totalQuantity}
                    </span>
                  )}
                </div>
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>Plantify GmbH ®</footer>
      </body>
    </html>
  );
}
