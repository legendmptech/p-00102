import { i1th_maths } from "../data/data";
import ExerciseLinkSection from "../components/ExerciseLinkSection";

export default function Class11() {
  return (
    <main className={"pt-24 min-h-screen flex flex-col items-center"}>
      <div className="px-5 md:px-10 md:max-w-3xl">
        <h1>Samacheer Kalvi TN Board 11th Standard Maths Book Solutions</h1>
        <div className="chat chat-end my-5">
          <div className="chat-bubble">
            {
              "'Mathematics is the queen of the sciences and arithmetic the queen of mathematics.' - Carl Friedrich Gauss"
            }
          </div>
        </div>
        <p>
          By mastering mathematics, you gain the keys to unlock the secrets of
          all scientific fields, empowering you to innovate and excel in any
          discipline
        </p>
        {i1th_maths?.chapters_list?.map((chapterName, index) => (
          <ExerciseLinkSection
            exercises={i1th_maths[chapterName]?.exercises}
            sectionTitle={i1th_maths[chapterName]?.name}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
