import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form>
        <label>Card Number:</label>
        <input type="text" />
        <br />
        <label>Expiration Date:</label>
        <input type="text" />
        <br />
        <label>CVV:</label>
        <input type="text" />
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;