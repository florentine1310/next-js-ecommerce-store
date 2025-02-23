'use client';

import { createCookie } from './actions';
import styles from './page.module.scss';

export default function AddToCartButton({ selectedProduct }) {
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
