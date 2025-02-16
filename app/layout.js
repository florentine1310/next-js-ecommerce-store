import Image from 'next/image';
import Link from 'next/link';
import styles from './globals.css';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: {
    default: 'Home | Plantify',
    template: '%s  | Plantify',
  },
  description: 'Find beautiful house plants online',
};

export default function RootLayout({ children }) {
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
                <Image
                  src="/icons/cart-icon.svg"
                  alt="Logo"
                  width={90}
                  height={90}
                />
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
