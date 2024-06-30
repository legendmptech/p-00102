import Image from "next/image";
import { LatexText } from "./components/Latex";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 flex flex-col w-full items-center">
      <div className="hero max-w-3xl align-middle mt-28">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img src={"@/public/logo-version-1_webp.webp"} /> */}
          <Image
            alt="profile picture"
            src="/logo-version-1-webp.webp"
            className="max-w-sm rounded-lg shadow-2xl md:w-52 md:h-52"
            width={200}
            height={200}
          />
          <div>
            <h1 className="text-5xl font-bold text-center">
              "கற்க கசடறக் ..."
            </h1>
            <h1 className="pt-5 text-center">Welcome to Alphaa Math!</h1>
            <p className="py-6">
              At Alphaa Math, we are dedicated to helping students excel in
              mathematics. Our platform is tailored specifically for the Tamil
              Nadu State Board and CBSE Maths syllabi, providing comprehensive
              solutions and resources for all your math needs. Whether you're
              struggling with complex problems or just looking to sharpen your
              skills, Alphaa Math is here to guide you every step of the way.
            </p>
            <p>
              Explore our extensive library of solved problems, detailed
              explanations, and interactive tools designed to make learning math
              easier and more enjoyable. Join our community of learners and take
              the first step towards mastering math with confidence. Welcome to
              a new way of learning at Alphaa Math!
            </p>
            <div className="flex justify-center">
              <button className="btn btn-neutral mt-5 text-center hover:bg-gray">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col flex-wrap w-full h-full px-10 md:px-5">
        <button className="btn btn-neutral">Neutral</button>
      </div> */}
    </main>
  );
}
