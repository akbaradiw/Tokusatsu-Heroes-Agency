"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <nav className="lg: bg-white  py-2 lg:py-5  shadow-md fixed z-50  w-full">
        <div className="container mx-auto flex-row flex justify-between  items-center">
          <div className="text-white text-lg font-bold">
            <Image
              src="/1200px-Toei_logo.svg.png"
              alt="toei"
              width={100}
              height={100}
              className="lg:w-16 lg:h-16 lg:fixed lg:left-10 lg:top-2 w-12 mx-3 lg:mx-20"
            />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => clickMenu()}
              className="text-red-600 focus:outline-none absolute top-4 right-4 transition-opacity duration-200"
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
            className="hidden w-full lg:flex lg:items-center lg:static fixed left-4 top-11  bg-white lg:bg-transparent lg:z-auto animate-slide-in lg:animate-none lg:w-auto "
            id="navbar-links"
          >
            <ul className="text-lg  lg:pt-0 lg:flex text-center lg:justify-between   lg:items-center lg:space-x-4 lg:text-white  ">
              <li>
                <Link
                  href="/"
                  className="block rounded-md shadow-md border-none bg-red-600  lg:hover:bg-red-800  lg:p-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/heroes"
                  className="block rounded-md shadow-md   border-none bg-red-600   lg:hover:bg-red-800 lg:p-2"
                >
                  Heroes
                </Link>
              </li>
              <li>
                <Link
                  href="/portofolio"
                  className="block rounded-md shadow-md  border-none bg-red-600   lg:hover:bg-red-800   lg:p-2"
                >
                  Portofolio
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="block rounded-md shadow-md  border-none bg-red-600   lg:hover:bg-red-800   lg:p-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="py-9 px-4 lg:hidden">
        <div className="container mx-auto"></div>
        <div
          className={`fixed bottom-0 right-0 left-0 w-full z-50 bg-red-600 p-4 text-white transition-transform duration-400   ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <ul className="flex justify-between md:justify-around">
            <li>
              <Link
                href="/"
                className="flex items-center flex-col justify-center md:text-2xl hover:text-black "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="w-4 h-4 md:w-10 md:h-10 md:pb-2"
                >
                  <path
                    fill="#ffffff"
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                  />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/heroes"
                className="flex items-center flex-col justify-center md:text-2xl  hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 md:w-10 md:h-10  md:pb-2"
                >
                  <path
                    fill="#ffffff"
                    d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"
                  />
                </svg>
                Heroes
              </Link>
            </li>

            <li>
              <Link
                href="/portofolio"
                className="flex items-center flex-col justify-center md:text-2xl hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 md:w-10 md:h-10  md:pb-2 "
                >
                  <path
                    fill="#ffffff"
                    d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                  />
                </svg>
                Portofolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center flex-col justify-center md:text-2xl  hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 md:w-10 md:h-10 md:pb-2"
                >
                  <path
                    fill="#ffffff"
                    d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"
                  />
                </svg>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
