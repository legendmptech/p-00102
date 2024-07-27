import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";

function YoutubeBtn(props) {
  return (
    <Link
      className="link link-hover"
      href={"https://youtube.com/@alphaamath?si=xLv5WRI-eUO_TQ4i"}
      target="_blank"
    >
      <div
        className="flex flex-row gap-2 items-center p-3 rounded-md"
        style={{ backgroundColor: "#212121" }}
      >
        <FaYoutube size={25} color="#ff0000" />
        <p className="font-medium text-white">Subscribe Alphaa Math</p>
      </div>
    </Link>
  );
}

export default YoutubeBtn;
