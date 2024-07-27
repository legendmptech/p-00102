import Link from "next/link";
import React from "react";
import { FiInstagram } from "react-icons/fi";

function InstaBtn(props) {
  return (
    <Link
      className="link link-hover"
      href={"https://www.instagram.com/alphaa__math?igsh=aTdramZucmQ4MjQ1"}
      target="_blank"
    >
      <div className="w-full text-white flex flex-row gap-2 items-center p-3 bg-gradient-conic from-purple-800 to-pink-600 rounded-md">
        <FiInstagram size={25} />
        <p className="font-medium">Instagram</p>
      </div>
    </Link>
  );
}

export default InstaBtn;
