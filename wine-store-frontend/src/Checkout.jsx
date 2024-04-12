import React, { useState, useEffect } from "react";

const Checkout = ({ price }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setChecoutError] = useState();

let sessionId;

  const stripe = Stripe("pk_test_51OzG3a00rT4NOMXSWNP8fvQNt6ycKH7ku7rQm3t7B5fhsvLlFCC1IytK6WZlOgwzdsFw6Sq2t2qGrAc17qKAroRi00yZVMKcK0");

  useEffect(() => {
    fetch("/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    })
      .then(function(r) {
        return r.json();
      })
      .then(function(response) {
        sessionId = response.id;
      });
  });

  const handleClick = e => {
    e.preventDefault();
    stripe.redirectToCheckout({
      sessionId: sessionId
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Buy</button>
    </div>
  );
};

export default Checkout;