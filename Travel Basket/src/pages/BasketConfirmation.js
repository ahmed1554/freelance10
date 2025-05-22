import React from "react";
import { Link } from "react-router-dom";

const BasketConfirmation = () => {
  return (
    <div className="container py-5">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title mb-4">Booking Confirmed!</h1>
          <p className="card-text mb-4">
            Your reservation has been successfully processed.
          </p>
          <Link to="/basket" className="btn btn-primary">
            Return to Basket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasketConfirmation;
