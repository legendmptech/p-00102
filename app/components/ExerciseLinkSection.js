import Link from "next/link";
import React from "react";

function ExerciseLinkSection(props) {
  //
  return (
    <div className="pt-5">
      <h3>{props?.sectionTitle}</h3>
      <ul className="py-5 px-2">
        {props?.exercises.map(({ ExerciseID, ExerciseName }, index) => (
          <li className="mb-2" key={index}>
            <Link
              href={`${process.env.NEXT_PUBLIC_URL}/exercises/${ExerciseID}`}
              className="link link-primary link-hover"
            >
              {props?.sectionTitle + " " + ExerciseName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseLinkSection;
