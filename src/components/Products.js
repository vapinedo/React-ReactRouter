import React from "react";
import { NavLink, Outlet } from "react-router-dom"

export const Products = () => {
  return (
    <div>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="featured" className="nav-link">
            Featured
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="new" className="nav-link">
            New
          </NavLink>
        </li>
      </ul>

      <input
        type="search"
        className="form-control my-4"
        placeholder="Search products"
      />

      <Outlet />
    </div>
  );
};
