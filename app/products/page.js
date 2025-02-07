import Link from 'next/link';

export const metadata = {
  title: 'Plantify',
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
            <Link href={`/products/${product.id}`}>
              <div>{product.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
