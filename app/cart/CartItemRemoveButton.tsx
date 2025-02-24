'use client';

import React from 'react';
import { deleteCookie } from './actions';
import styles from './page.module.scss';

type Props = {
  itemId: number;
};

export default function CartItemRemoveButton({ itemId }: Props) {
  return (
    <form>
      <button
        data-test-id={`cart-product-remove-${itemId}`}
        formAction={() => deleteCookie({ itemId })}
        className={styles.RemoveButton}
      >
        Remove
      </button>
    </form>
  );
}
