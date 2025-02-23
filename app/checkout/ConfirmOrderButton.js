'use client';

import React from 'react';
import styles from './page.module.scss';

function handleOrderSubmit() {}

export default function ConfirmOrderButton() {
  return (
    <div>
      <button
        className={styles.ConfirmOrderButton}
        data-test-id="checkout-confirm-order"
        formAction={() => handleOrderSubmit()}
      >
        Confirm Order
      </button>
    </div>
  );
}
