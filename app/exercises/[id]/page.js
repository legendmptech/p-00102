import NoProblemFound from "@/app/components/NoProblemFound";
import Problem from "@/app/components/Problem";
import { getAllProblemsByExerciseId } from "@/app/lib/db";

async function page({ params: { id }, searchParams: {} }) {
  const data = await getAllProblemsByExerciseId(id);
  const problems = data?.problems;
  const exercise = data?.exercise;

  return (
    <main className="pt-20 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl px-4">
        <h1>{exercise?.ExerciseName}</h1>
        {problems.length != 0 ? (
          problems?.map((prop, index) => <Problem {...prop} key={index} />)
        ) : (
          <NoProblemFound
            text={"No Math Problem Found for the given Exercise"}
          />
        )}
      </div>
    </main>
  );
}

export default page;
