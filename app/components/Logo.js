import Image from "next/image";
import React from "react";

function Logo(props) {
  return (
    <Image
      alt="logo"
      src="/logo-version-1-webp.webp"
      className="rounded-full shadow-2xl w-14 h-14 ml-3 md:ml-0"
      width={64}
      height={64}
    />
  );
}

export default Logo;
