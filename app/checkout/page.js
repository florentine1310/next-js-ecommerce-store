import CheckoutForm from './CheckoutForm';

export const metadata = {
  title: 'Checkout',
  description: 'Plantify checkout page',
};

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm />
    </div>
  );
}
