'use client';

import type { Product } from '../../migrations/00000-createTableProducts';
import { createCookie } from './actions';
import styles from './page.module.scss';

type Props = {
  selectedProduct: Product;
};

export default function AddToCartButton({ selectedProduct }: Props) {
  const quantity = 1;

  const cookieValue = {
    id: selectedProduct.id,
    name: selectedProduct.name,
    price: selectedProduct.price,
    quantity: quantity,
  };

  return (
    <div>
      <form>
        <button
          data-test-id="product-add-to-cart"
          formAction={() => createCookie(cookieValue)}
          className={styles.AddToCartButton}
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
}
