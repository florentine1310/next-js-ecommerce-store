'use client';

import { useRouter } from 'next/navigation';
import { deleteCookie } from './actions';
import styles from './page.module.scss';

export default function ConfirmOrderButton() {
  const router = useRouter();
  async function handleOrderSubmit() {
    await deleteCookie();
    router.push('/thank-you');
  }
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
