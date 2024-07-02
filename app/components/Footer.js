import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer(props) {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <Image
          alt="logo"
          src="/logo-version-1-webp.webp"
          className="rounded-full shadow-2xl w-14 h-14 ml-3 md:ml-0"
          width={64}
          height={64}
        />
        <p>
          <b>Alphaa Math</b>
          <br />
          Providing reliable Math solutions since 2024
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">TN STATE BOARD MATHS</h6>
        <Link className="link link-hover" href={"#"}>
          12th Standard
        </Link>
        <Link className="link link-hover" href={"#"}>
          11th Standard
        </Link>
        <Link className="link link-hover" href={"#"}>
          10th Standard
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">CBSE BOARD MATHS</h6>
        <Link className="link link-hover" href={"#"}>
          12th Standard
        </Link>
        <Link className="link link-hover" href={"#"}>
          11th Standard
        </Link>
        <Link className="link link-hover" href={"#"}>
          10th Standard
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">SITE MAP</h6>
        <Link className="link link-hover" href={"#"}>
          CONTACT US
        </Link>
        <Link className="link link-hover" href={"#"}>
          ABOUT US
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
