import React, { useState } from "react";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const handleLogin = () => {
    auth.login(user);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h2>Login page</h2>

      <div className="my-4">
        <label>
          Username{" "}
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
      </div>

      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
