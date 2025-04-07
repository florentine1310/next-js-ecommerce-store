import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'Order successfully submitted',
};

export default function ThankYouPage() {
  return (
    <div>
      <h1 className={styles.ThankYouHeadline}>Thank you for your order</h1>
      <p>
        Your order has been successfully placed. You will receive an email
        confirmation soon.
      </p>
    </div>
  );
}
