import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

function Navbar(props) {
  return (
    <nav className="w-full bg-base-200 flex justify-center border-b-2 fixed top-0 left-0 z-20 h-[70px]">
      <div className="navbar max-w-4xl w-full">
        <div className="navbar-start drawer flex">
          {/* Sidebar content here */}
          <Sidebar />
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
