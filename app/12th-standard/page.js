import { i2th_maths } from "../data/data";
import ExerciseLinkSection from "../components/ExerciseLinkSection";

export default function Class12() {
  return (
    <main className={"pt-24 min-h-screen flex flex-col items-center"}>
      <div className="px-5 md:px-10 md:max-w-3xl">
        <h1>Samacheer Kalvi TN Board 12th Standard Maths Book Solutions</h1>
        <div className="chat chat-end my-5">
          <div className="chat-bubble">
            {
              "'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.' - Shakuntala Devi"
            }
          </div>
        </div>
        <p>
          Embrace mathematics as it opens the door to understanding the world
          around you, from the simplest daily tasks to the most complex
          scientific discoveries.
        </p>
        {i2th_maths?.chapters_list?.map((chapterName, index) => (
          <ExerciseLinkSection
            exercises={i2th_maths[chapterName]?.exercises}
            sectionTitle={i2th_maths[chapterName]?.name}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
