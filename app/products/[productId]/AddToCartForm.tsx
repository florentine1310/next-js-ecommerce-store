'use client';

import { useState } from 'react';
import type { Product } from '../../../migrations/00000-createTableProducts';
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

  const cookieValue = {
    id: selectedProduct.id,
    name: selectedProduct.name,
    price: selectedProduct.price,
    quantity: quantity,
  };

  return (
    <div>
      <div data-test-id="product-quantity" className={styles.QuantitySelector}>
        <button onClick={handleDecrease}> - </button>
        <div>{quantity}</div>
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
