import CheckoutForm from './CheckoutForm';
import styles from './page.module.scss';

export const metadata = {
  title: 'Checkout',
  description: 'Plantify checkout page',
};

export default function CheckoutPage() {
  return (
    <div>
      <h1 className={styles.CheckoutHeadline}>Checkout</h1>

      <CheckoutForm />
    </div>
  );
}
