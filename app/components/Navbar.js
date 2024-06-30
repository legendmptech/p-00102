import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar(props) {
  return (
    <nav className="w-full flex justify-center bg-base-100 border-b-2 fixed top-0 left-0 z-20 h-[70px]">
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
          <div className="drawer-side z-40">
            <label
              htmlFor="menu-sidebar"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-3 w-80 min-h-full bg-base-100 text-base-content pt-20">
              {/* Sidebar content here */}
              <li>
                <Link
                  href={"/12th-standard"}
                  className="bg-neutral text-gray-200 hover:bg-white hover:text-black"
                >
                  12th Standard
                </Link>
                <Link href={"/12th-standard"} className="custom-drop-down-link">
                  Mathematics
                </Link>
                <Link href={"/12th-standard"} className="custom-drop-down-link">
                  Biology
                </Link>
                <Link href={"/12th-standard"} className="custom-drop-down-link">
                  Physics
                </Link>
              </li>
              <li>
                <Link
                  href={"/10th-standard"}
                  className="bg-neutral text-gray-200 hover:bg-white hover:text-black"
                >
                  10th Standard
                </Link>
                <Link href={"/12th-standard"} className="custom-drop-down-link">
                  Tamil
                </Link>
                <Link href={"/12th-standard"} className="custom-drop-down-link">
                  English
                </Link>
                <Link href={"/12th-standard"} className="custom-drop-down-link">
                  Mathematics
                </Link>
              </li>
            </ul>
          </div>
          <Image
            alt="logo"
            src="/logo-version-1-webp.webp"
            className="rounded-full shadow-2xl w-14 h-14 ml-3 md:ml-0"
            width={64}
            height={64}
          />
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="dropdown dropdown-hover">
              <summary className="btn m-1">12th Standard</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link href={"/"}>Maths</Link>
                </li>
                <li>
                  <Link href={"/"}>Biology</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <summary className="btn m-1">10th Standard</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link href={"/"}>Tamil</Link>
                </li>
                <li>
                  <Link href={"/"}>English</Link>
                </li>
                <li>
                  <Link href={"/"}>Maths</Link>
                </li>
                <li>
                  <Link href={"/"}>Science</Link>
                </li>
                <li>
                  <Link href={"/"}>Social Science</Link>
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
