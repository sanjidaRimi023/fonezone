import React from "react";
import { Link, NavLink } from "react-router";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-0 shadow-md mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="cursor-pointer lg:hidden">
            <RiMenu2Line></RiMenu2Line>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            >
             <FaCartArrowDown size={25}></FaCartArrowDown>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            >
              <MdBookmarkAdd size={25}></MdBookmarkAdd>
            </NavLink>
          </li>
          </ul>
        </div>
        <Link to="/" className="font-bold text-4xl">
          Fone<span className="text-[#ec1a33]">Zone</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-2">
          <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            >
             <FaCartArrowDown size={25}></FaCartArrowDown>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            >
              <MdBookmarkAdd size={25}></MdBookmarkAdd>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
