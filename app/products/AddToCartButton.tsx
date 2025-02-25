'use client';

import type { Product } from '../../migrations/00000-createTableProducts';
import { createOrUpdateCookie } from './actions';
import styles from './page.module.scss';

type Props = {
  selectedProduct: Product;
};

export default function AddToCartButton({ selectedProduct }: Props) {
  const productToUpdate = {
    id: selectedProduct.id,
    name: selectedProduct.name,
    price: selectedProduct.price,
  };

  return (
    <div>
      <form>
        <button
          data-test-id="product-add-to-cart"
          formAction={() => createOrUpdateCookie({ productToUpdate })}
          className={styles.AddToCartButton}
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
}
