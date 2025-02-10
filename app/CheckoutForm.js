'use client';

import React from 'react';

export default function CheckoutForm() {
  return (
    <div>
      <form>
        <h2>Delivery</h2>
        <label>
          First Name:
          <input
            data-test-id="checkout-first-name"
            name="firstName"
            placeholder="Enter first name"
          />
        </label>
        <label>
          Last Name:
          <input
            data-test-id="checkout-last-name"
            name="lastName"
            placeholder="Enter last name"
          />
        </label>
        <label>
          Email:
          <input
            data-test-id="checkout-email"
            name="email"
            placeholder="Enter email address"
          />
        </label>
        <label>
          Address:
          <input
            data-test-id="checkout-address"
            name="address"
            placeholder="Enter street name"
          />
        </label>
        <label>
          City:
          <input
            data-test-id="checkout-city"
            name="city"
            placeholder="Enter city name"
          />
        </label>
        <label>
          Postal code:
          <input
            data-test-id="checkout-postal-code"
            name="postalCode"
            placeholder="Enter postal code"
          />
        </label>
        <label>
          Country:
          <input
            data-test-id="checkout-postal-country"
            name="country"
            placeholder="Enter country"
          />
        </label>
        <h2>Payment</h2>
        <label>
          Credit Card:
          <input
            data-test-id="checkout-postal-credit-card"
            name="creditCard"
            placeholder="Enter credit card"
          />
        </label>
        <label>
          Expiration Date:
          <input
            data-test-id="checkout-expiration-date"
            name="expirationDate"
            placeholder="Enter expiration date"
          />
        </label>
        <label>
          Security Code:
          <input
            data-test-id="checkout-security-code"
            name="securityCode"
            placeholder="Enter security code"
          />
        </label>
      </form>
      <button data-test-id="checkout-confirm-order">Confirm Order</button>
    </div>
  );
}
