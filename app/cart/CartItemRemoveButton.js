'use client';

import React from 'react';
import { deleteCookie } from './actions';
import styles from './page.module.scss';

export default function CartItemRemoveButton(props) {
  return (
    <>
      <form>
        <button
          data-test-id="cart-product-remove-<product id>"
          formAction={() => deleteCookie(props.itemId)}
          className={styles.RemoveButton}
        >
          Remove
        </button>
      </form>
    </>
  );
}
