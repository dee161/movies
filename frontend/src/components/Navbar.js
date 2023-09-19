import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav
        className={`bg-gray-100 border-gray-200 dark:bg-gray-900 ${
          isMobileMenuOpen ? "md:hidden" : ""
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <img
              src="data:image/png;base64,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"
              className="h-8 mr-3"
              alt=""
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              yomovies
            </span>
          </a>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="./Delete/del"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <button> DeleteUser </button>
                </Link>
              </li>
              <li>
                <Link
                  href="./sub/sub"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <button> subscription </button>
                </Link>
              </li>
              <li>
                <Link
                  href="/Register"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <button> Register </button>
                </Link>
              </li>
              <li>
                <Link
                  href="/Login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <button> Login </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
