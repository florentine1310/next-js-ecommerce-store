'use client';

import React, { useState } from 'react';

export default function CheckoutForm() {
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

  function handleOrderSubmit() {
    console.log('Order Details:', customer);
    console.log('Payment Details', paymentDetails);
  }

  return (
    <div>
      <form>
        <h2>Delivery</h2>
        <label>
          First Name:
          <input
            data-test-id="checkout-first-name"
            name="firstName"
            value={customer.firstName}
            placeholder="Enter first name"
            onChange={(e) => {
              setCustomer({ ...customer, firstName: e.currentTarget.value });
            }}
          />
        </label>
        <label>
          Last Name:
          <input
            data-test-id="checkout-last-name"
            name="lastName"
            value={customer.lastName}
            placeholder="Enter last name"
            onChange={(e) => {
              setCustomer({ ...customer, lastName: e.currentTarget.value });
            }}
          />
        </label>
        <label>
          Email:
          <input
            data-test-id="checkout-email"
            name="email"
            value={customer.email}
            placeholder="Enter email address"
            onChange={(e) => {
              setCustomer({ ...customer, email: e.currentTarget.value });
            }}
          />
        </label>
        <label>
          Address:
          <input
            data-test-id="checkout-address"
            name="address"
            value={customer.address}
            placeholder="Enter street name"
            onChange={(e) => {
              setCustomer({ ...customer, address: e.currentTarget.value });
            }}
          />
        </label>
        <label>
          City:
          <input
            data-test-id="checkout-city"
            name="city"
            value={customer.city}
            placeholder="Enter city name"
            onChange={(e) => {
              setCustomer({ ...customer, city: e.currentTarget.value });
            }}
          />
        </label>
        <label>
          Postal code:
          <input
            data-test-id="checkout-postal-code"
            name="postalCode"
            value={customer.postalCode}
            placeholder="Enter postal code"
            onChange={(e) => {
              setCustomer({ ...customer, postalCode: e.currentTarget.value });
            }}
          />
        </label>
        <label>
          Country:
          <input
            data-test-id="checkout-postal-country"
            name="country"
            value={customer.country}
            placeholder="Enter country"
            onChange={(e) => {
              setCustomer({ ...customer, country: e.currentTarget.value });
            }}
          />
        </label>
        <h2>Payment</h2>
        <label>
          Credit Card:
          <input
            data-test-id="checkout-postal-credit-card"
            name="creditCard"
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
        <label>
          Expiration Date:
          <input
            data-test-id="checkout-expiration-date"
            name="expirationDate"
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
        <label>
          Security Code:
          <input
            data-test-id="checkout-security-code"
            name="securityCode"
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
      </form>
      <button
        data-test-id="checkout-confirm-order"
        onSubmit={handleOrderSubmit}
      >
        Confirm Order
      </button>
    </div>
  );
}
