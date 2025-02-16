'use client';

import React from 'react';
import styles from './page.module.scss';

export default function CheckoutButton() {
  return (
    <div>
      <button data-test-id="cart-checkout" className={styles.CheckoutButton}>
        Checkout
      </button>
    </div>
  );
}
