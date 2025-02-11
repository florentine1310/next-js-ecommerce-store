'use client';

import { useState } from 'react';
import { createCookie } from './actions';

export default function AddToCartForm({ selectedProduct }) {
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
    name: selectedProduct.name,
    price: selectedProduct.price,
    quantity: quantity,
  };

  return (
    <div>
      <div data-test-id="product-quantity">
        <button onClick={handleDecrease}> - </button>
        <div>{quantity}</div>
        <button onClick={handleIncrease}> + </button>
      </div>
      <form>
        <button
          data-test-id="product-add-to-cart"
          formAction={() => createCookie(cookieValue)}
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
}
