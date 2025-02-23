'use client';

import { useState } from 'react';
import { createCookie } from './actions';
import styles from './page.module.scss';

export default function QuantitySelector({ selectedProduct }) {
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
    <div data-test-id="product-quantity" className={styles.QuantitySelector}>
      <button onClick={handleDecrease}> - </button>
      <div>{quantity}</div>
      <button onClick={handleIncrease}> + </button>
    </div>
  );
}
