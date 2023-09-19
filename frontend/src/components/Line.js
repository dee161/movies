import Link from "next/link";
import React from "react";

function Line() {
  return (
    <div>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex justify-center items-center ">
            <ul className="flex flex-col sm:flex-row font-medium mt-0 space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/Shows/shows"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  <button>Show</button>
                </Link>
              </li>
              <li>
                <Link
                  href="/running"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  other
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Line;
