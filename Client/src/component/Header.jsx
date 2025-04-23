import React from "react";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const redirect = useNavigate();

  return (
    <header className="p-3 py-4 bg-indigo-800 text-white">
      <div className="container flex justify-between h-12 mx-auto">
        <button
          className="flex items-center p-2 mr-6 sm:mr-0 cursor-pointer"
          onClick={() => redirect("/")}>
          <img
            src="/vite.svg"
            className="h-8"
            alt="Logo"
          />
        </button>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              to="/register" // ✅ Added "to" prop
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-white transition">
              Register
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/logout"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-white transition">
              Logout
            </Link>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
