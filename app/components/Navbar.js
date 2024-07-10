import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "./Logo";

function Navbar(props) {
  return (
    <nav className="w-full bg-base-200 flex justify-center border-b-2 fixed top-0 left-0 z-20 h-[70px]">
      <div className="navbar max-w-4xl w-full">
        <div className="navbar-start drawer flex">
          <input id="menu-sidebar" type="checkbox" className="drawer-toggle" />
          <div className="md:hidden">
            <label
              htmlFor="menu-sidebar"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <nav className="drawer-side z-40">
            <label
              htmlFor="menu-sidebar"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-3 w-80 min-h-full bg-base-100 text-base-content pt-20">
              {/* Sidebar content here */}
              <Link
                href={"/12th-standard"}
                className="link link-hover bg-neutral text-base-200 p-2"
              >
                12th Standard
              </Link>
              <li>
                <Link href={"/12th-standard"} className="link link-hover">
                  Mathematics
                </Link>
              </li>
              <Link
                href={"/11th-standard"}
                className="link bg-neutral text-base-200 p-2 no-underline"
              >
                11th Standard
              </Link>
              <li>
                <Link href={"/11th-standard"} className="link link-hover">
                  Mathematics
                </Link>
              </li>
              <Link
                href={"/10th-standard"}
                className="link bg-neutral text-base-200 p-2 no-underline"
              >
                10th Standard
              </Link>
              <li>
                <Link href={"/10th-standard"} className="link link-hover">
                  Mathematics
                </Link>
              </li>
            </ul>
          </nav>
          <Logo />
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="dropdown dropdown-hover">
              <summary className="btn m-1">12th Standard</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link href={"/12th-standard"}>Maths</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <summary className="btn m-1">11th Standard</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link href={"/11th-standard"}>Maths</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <summary className="btn m-1">10th Standard</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link href={"/10th-standard"}>Maths</Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div className="navbar-end">{/* SHOPPING CART SIDEBAR */}</div>
      </div>
    </nav>
  );
}

export default Navbar;
