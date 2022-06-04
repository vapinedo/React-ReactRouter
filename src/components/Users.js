import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h3>User 1</h3>
      <h3>User 2</h3>
      <h3 className="mb-4">User 3</h3>
      <Outlet />

      <div className="my-5">
        <button
          onClick={() => setSearchParams({ filter: "active" })}
          className="btn btn-primary"
        >
          Active users
        </button>

        <button
          onClick={() => setSearchParams({})}
          className="btn btn-outline-danger mx-3"
        >
          Reset filter
        </button>
      </div>

      {showActiveUsers && <h2>Showing active users</h2>}
      {!showActiveUsers && <h2>Showing all users</h2>}
    </div>
  );
};
