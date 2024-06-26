"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="lg:bg-red-600  py-2 lg:py-5  shadow-md fixed    w-full">
      <div className="container mx-auto flex-row flex justify-between  items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Brand</Link>
        </div>
        <div className="block lg:hidden ">
          <button
            onClick={() => clickMenu()}
            className="text-red-600 focus:outline-none absolute top-4 right-4"
            type="button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`w-full lg:flex lg:items-center lg:static fixed left-4 top-11  bg-white lg:bg-transparent lg:z-auto     lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-links"
        >
            <ul className="text-lg  lg:pt-0 lg:flex text-center lg:justify-between   lg:items-center lg:space-x-4 lg:text-white  ">
              <li>
                <Link
                  href="/"
                  className="block py-2 me-6  border-b border-gray-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-black  lg:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/heroes"
                  className="block py-2 me-6 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-black lg:border-0 lg:p-0"
                >
                  Heroes
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="block py-2 me-6  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-black lg:border-0 lg:p-0"
                >
                  Gallery
                </Link>
              </li>
            </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
