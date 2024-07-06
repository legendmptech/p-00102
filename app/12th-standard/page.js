import Link from "next/link";
import { i2th_maths } from "../data/data";
import LinkSection from "../components/LinkSection";

export default function Class12() {
  return (
    <main className={"pt-24 min-h-screen flex flex-col items-center"}>
      <div className="px-5 md:px-10 md:max-w-5xl">
        <h1>Samacheer Kalvi TN Board 12th Standard Maths Book Solutions</h1>
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 1 - Applications of Matrices and Determinants"
          }
          data={i2th_maths?.chapter_1}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 2 - Complex Numbers"
          }
          data={i2th_maths?.chapter_2}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 3 - Theory of Equations"
          }
          data={i2th_maths?.chapter_3}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 4 - Inverse Trigonometric Functions"
          }
          data={i2th_maths?.chapter_4}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 5 - Two Dimensional Analytical Geometry - II"
          }
          data={i2th_maths?.chapter_5}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 6 - Applications of Vector Algebra"
          }
          data={i2th_maths?.chapter_6}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 7 - Applications of Differential Calculus"
          }
          data={i2th_maths?.chapter_7}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 8 - Differential and Partial Derivatives"
          }
          data={i2th_maths?.chapter_8}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 9 - Applications of Integration"
          }
          data={i2th_maths?.chapter_9}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 10 - Ordinary Differential Equations"
          }
          data={i2th_maths?.chapter_10}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 11 - Probability Distributions"
          }
          data={i2th_maths?.chapter_11}
        />
        <LinkSection
          sectionTitle={
            "12th Maths TN Board English Medium Chapter 12 - Discrete Mathematics"
          }
          data={i2th_maths?.chapter_12}
        />
      </div>
    </main>
  );
}
