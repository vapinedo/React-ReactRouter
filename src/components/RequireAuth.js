import React from "react";
import { useAuth } from "../utils/auth";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};
