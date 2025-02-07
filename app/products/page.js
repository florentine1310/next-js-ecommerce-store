import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'Find beautiful plants online',
};

export default function ProductsPage() {
  const products = getProducts();
  return (
    <div>
      <h1>My plants</h1>
      <div className={styles.ProductGrid}>
        {products.map((product) => {
          return (
            <div className={styles.ProductTile} key={`product-${product.id}`}>
              <Link
                data-test-id="product-<product id>"
                href={`/products/${product.id}`}
              >
                <h3>{product.name}</h3>
                <div>{product.description}</div>
                <div className={styles.price}>{product.price}</div>
                <div>
                  <button className={styles.AddToCartButton}>
                    Add To Cart
                  </button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
