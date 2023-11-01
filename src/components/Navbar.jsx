import React from "react";
import SVG from "./SVG";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav class="bg-white flex justify-between items-center px-4 py-5 w-4/5 m-auto">
      <div className="flex w-1/3 justify-between items-center">
        <div className="font-bold text-4xl">Exclusive</div>
        <div className="flex gap-10">
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "border-b-2" : ""
            }
          >
            Products
          </NavLink>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="border px-3 py-1.5 flex rounded-md bg-gray-100">
          <input
            placeholder="What are you looking for?"
            className="outline-none bg-gray-100"
          ></input>
          <SVG
            width={24}
            height={24}
            pathName="Search"
            viewBox="0 0 24 24"
            strokeColor="black"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </div>
        <SVG
          width={32}
          height={32}
          viewBox="0 0 32 32"
          pathName="Wishlist"
          strokeColor="black"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <SVG
          width={32}
          height={32}
          viewBox="0 0 32 32"
          pathName="Cart1"
          pathName2="Cart2"
          pathName3="Cart3"
          pathName4="Cart4"
          strokeColor="black"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </div>
    </nav>
  );
}

export default Navbar;
