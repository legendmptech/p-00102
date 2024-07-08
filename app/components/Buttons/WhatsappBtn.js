import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappBtn(props) {
  return (
    <Link className="link link-hover" href={"/"}>
      <div className="flex flex-row gap-2 items-center p-3 bg-green-400 rounded-md">
        <FaWhatsapp size={25} />
        <p className="font-medium">Whatsapp Community</p>
      </div>
    </Link>
  );
}

export default WhatsappBtn;
