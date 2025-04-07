'use client';

import { useState } from 'react';
import type { Product } from '../../../migrations/00000-createTableProducts';
import reduceCookieValue from '../../../util/reduceCookieValue';
import { createCookie } from './actions';
import styles from './page.module.scss';

type Props = {
  selectedProduct: Product;
};

export default function AddToCartForm({ selectedProduct }: Props) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const cookieValue = reduceCookieValue(selectedProduct, quantity);

  return (
    <div>
      <div className={styles.QuantitySelector}>
        <button onClick={handleDecrease}> - </button>
        <input
          data-test-id="product-quantity"
          required
          value={quantity}
          onChange={(event) => {
            if (Number(event.currentTarget.value) > 0) {
              setQuantity(Number(event.currentTarget.value));
            } else {
              setQuantity(0);
            }
          }}
        />
        <button onClick={handleIncrease}> + </button>
      </div>
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
