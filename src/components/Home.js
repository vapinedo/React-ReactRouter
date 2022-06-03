import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate("order-summary")} className="btn btn-primary mt-3">Place order</button>
    </div>
  );
};
