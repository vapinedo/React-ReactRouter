import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Order confirmed!</h2>
      <button onClick={() => navigate(-1)} className="btn btn-danger mt-3">
        Go Back
      </button>
    </div>
  );
};
