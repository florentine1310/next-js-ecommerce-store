'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteCookie } from './actions';
import styles from './page.module.scss';

type Props = {
  orderTotal: number;
};

export default function CheckoutForm({ orderTotal }: Props) {
  const router = useRouter();
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [paymentDetails, setPaymentDetails] = useState({
    creditCard: '',
    expirationDate: '',
    securityCode: '',
  });

  const isFormComplete = () => {
    return (
      customer.firstName &&
      customer.lastName &&
      customer.email &&
      customer.address &&
      customer.city &&
      customer.postalCode &&
      customer.country &&
      paymentDetails.creditCard &&
      paymentDetails.expirationDate &&
      paymentDetails.securityCode
    );
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await deleteCookie();
    router.push('/thank-you');
  }

  return (
    <div className={styles.CheckoutFormContainer}>
      <form className={styles.CheckoutForm} onSubmit={handleSubmit}>
        <div className={styles.AddressForm}>
          <h2>Delivery</h2>
          <label className={styles.CheckoutInputFields}>
            First Name:
            <input
              data-test-id="checkout-first-name"
              name="firstName"
              required
              value={customer.firstName}
              placeholder="Enter first name"
              onChange={(e) => {
                setCustomer({ ...customer, firstName: e.currentTarget.value });
              }}
            />
          </label>
          <label className={styles.CheckoutInputFields}>
            Last Name:
            <input
              data-test-id="checkout-last-name"
              name="lastName"
              required
              value={customer.lastName}
              placeholder="Enter last name"
              onChange={(e) => {
                setCustomer({ ...customer, lastName: e.currentTarget.value });
              }}
            />
          </label>
          <label className={styles.CheckoutInputFields}>
            Email:
            <input
              data-test-id="checkout-email"
              name="email"
              type="email"
              required
              value={customer.email}
              placeholder="Enter email address"
              onChange={(e) => {
                setCustomer({ ...customer, email: e.currentTarget.value });
              }}
            />
          </label>
          <label className={styles.CheckoutInputFields}>
            Address:
            <input
              data-test-id="checkout-address"
              name="address"
              required
              value={customer.address}
              placeholder="Enter street name"
              onChange={(e) => {
                setCustomer({ ...customer, address: e.currentTarget.value });
              }}
            />
          </label>
          <label className={styles.CheckoutInputFields}>
            City:
            <input
              data-test-id="checkout-city"
              name="city"
              required
              value={customer.city}
              placeholder="Enter city name"
              onChange={(e) => {
                setCustomer({ ...customer, city: e.currentTarget.value });
              }}
            />
          </label>
          <label className={styles.CheckoutInputFields}>
            Postal code:
            <input
              data-test-id="checkout-postal-code"
              name="postalCode"
              required
              value={customer.postalCode}
              placeholder="Enter postal code"
              onChange={(e) => {
                setCustomer({ ...customer, postalCode: e.currentTarget.value });
              }}
            />
          </label>
          <label className={styles.CheckoutInputFields}>
            Country:
            <input
              data-test-id="checkout-country"
              name="country"
              required
              value={customer.country}
              placeholder="Enter country"
              onChange={(e) => {
                setCustomer({ ...customer, country: e.currentTarget.value });
              }}
            />
          </label>
        </div>

        <div className={styles.PaymentForm}>
          <h2>Your Order Total: {orderTotal} </h2>
          <br />
          <h2>Payment</h2>
          <label className={styles.CheckoutInputFields}>
            Credit Card:
            <input
              data-test-id="checkout-credit-card"
              name="creditCard"
              required
              value={paymentDetails.creditCard}
              placeholder="Enter credit card"
              onChange={(e) => {
                setPaymentDetails({
                  ...paymentDetails,
                  creditCard: e.currentTarget.value,
                });
              }}
            />
          </label>
          <label className={styles.CheckoutInputFields}>
            Expiration Date:
            <input
              data-test-id="checkout-expiration-date"
              name="expirationDate"
              required
              value={paymentDetails.expirationDate}
              placeholder="Enter expiration date"
              onChange={(e) => {
                setPaymentDetails({
                  ...paymentDetails,
                  expirationDate: e.currentTarget.value,
                });
              }}
            />
          </label>
          <label className={styles.CheckoutInputFields}>
            Security Code:
            <input
              data-test-id="checkout-security-code"
              name="securityCode"
              required
              value={paymentDetails.securityCode}
              placeholder="Enter security code"
              onChange={(e) => {
                setPaymentDetails({
                  ...paymentDetails,
                  securityCode: e.currentTarget.value,
                });
              }}
            />
          </label>
          <div className={styles.ConfirmOrderLink}>
            <button
              className={styles.ConfirmOrderButton}
              data-test-id="checkout-confirm-order"
              disabled={!isFormComplete()}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
