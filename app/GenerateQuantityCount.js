'use client';

import React, { useState } from 'react';

export default function QuantityCount() {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div data-test-id="product-quantity">
      <button onClick={handleDecrease}> - </button>
      <div>{quantity}</div>
      <button onClick={handleIncrease}> + </button>
    </div>
  );
}
