import { i0th_maths } from "../data/data";
import ExerciseLinkSection from "../components/ExerciseLinkSection";

export default function Class11() {
  return (
    <main className={"pt-24 min-h-screen flex flex-col items-center"}>
      <div className="px-5 md:px-10 md:max-w-3xl">
        <h1>Samacheer Kalvi TN Board 10th Standard Maths Book Solutions</h1>
        <div className="chat chat-end my-5">
          <div className="chat-bubble">
            {
              "'The only way to learn mathematics is to do mathematics.' - Paul Halmos"
            }
          </div>
        </div>
        <p>
          Dive into solving problems and practicing regularly, as this active
          engagement will build your confidence and proficiency in mathematics,
          leading to success.
        </p>
        {i0th_maths?.chapters_list?.map((chapterName, index) => (
          <ExerciseLinkSection
            exercises={i0th_maths[chapterName]?.exercises}
            sectionTitle={i0th_maths[chapterName]?.name}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
