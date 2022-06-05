import React from "react";
import { useAuth } from "../utils/auth";

export const Profile = () => {
  const auth = useAuth();

  return (
    <div>
      <h2>Profile page</h2>
      <h3>Welcome {auth.user}</h3>
    </div>
  );
};
