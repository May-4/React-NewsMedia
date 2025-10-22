import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full shadow bg-emerald-400 py-1">
      <div className="flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-green-400 shadow shadow-green-200 bg-green-300">
          <a href={void 0}>
            <h2 className="text-2xl font-bold text-green-600 custom-text-shadow leading-2">
              M
            </h2>
          </a>
        </div>

        <div className="ml-8">
          <NavItem />
          {/*<div className="flex-1 mt-3 space-y-2 lg:hidden md:inline-block bg-amber-400">
            <a
              href="javascript:void(0)"
              className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
              Sign in
            </a>
            <a
              href="javascript:void(0)"
              className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              Sign up
            </a>
          </div>*/}
        </div>

        <div className="flex-1  flex justify-end ">
          <div className="flex items-center max-w-sm rounded-lg overflow-hidden shadow-sm shadow-grey-300">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="px-4 py-2 text-white bg-emerald-500 rounded-r-lg hover:bg-emerald-600 active:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem() {
  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
      <li className="text-white hover:text-emerald-200">
        <Link to={'/'}>Blogs</Link>
      </li>
      <li className="text-white hover:text-emerald-200">
        <Link to='/create'>Create</Link>
      </li>
    </ul>
  );
}
