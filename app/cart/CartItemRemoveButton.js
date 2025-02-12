'use client';

import React from 'react';
import { deleteCookie } from './actions';

export default function CartItemRemoveButton(props) {
  return (
    <>
      <form>
        <button
          data-test-id="cart-product-remove-<product id>"
          formAction={() => deleteCookie(props.itemId)}
        >
          Remove
        </button>
      </form>
    </>
  );
}
