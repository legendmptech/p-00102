"use client";
import Link from "next/link";
import React from "react";

function Sidebar(props) {
  const handleSidebarClose = () => {
    document.getElementById("homePageSidebar").checked = false;
  };
  return (
    <>
      <input id="homePageSidebar" type="checkbox" className="drawer-toggle" />
      <div className="md:hidden">
        <label
          htmlFor="homePageSidebar"
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
          htmlFor="homePageSidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-3 w-80 min-h-full bg-base-100 text-base-content pt-20">
          <Link
            href={"/12th-standard"}
            className="link link-hover bg-neutral text-base-200 p-2"
          >
            12th Standard
          </Link>
          <li onClick={handleSidebarClose}>
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
          <li onClick={handleSidebarClose}>
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
          <li onClick={handleSidebarClose}>
            <Link href={"/10th-standard"} className="link link-hover">
              Mathematics
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
