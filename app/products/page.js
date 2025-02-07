import Link from 'next/link';
import { getProducts } from '../../database/products';

export const metadata = {
  title: 'Products',
  description: 'Find beautiful plants online',
};

export default function ProductsPage() {
  const products = getProducts();
  return (
    <div>
      <h1>My plants</h1>
      {products.map((product) => {
        return (
          <div key={`product-${product.id}`}>
            <Link
              data-test-id="product-<product id>"
              href={`/products/${product.id}`}
            >
              <h3>{product.name}</h3>
              <div>{product.description}</div>
              <div>{product.price}</div>
              <div>
                <button>Add To Cart</button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
