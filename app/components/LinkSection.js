import Link from "next/link";
import React from "react";

function LinkSection(props) {
  return (
    <div className="pt-5">
      <h3>{props?.sectionTitle}</h3>
      <ul className="py-5 px-2">
        {props?.data.map(({ link, text }, index) => (
          <li className="mb-2" key={index}>
            <Link href={`?ex=1`} className="link link-primary link-hover">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkSection;
