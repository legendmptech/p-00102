import mysql from "mysql2/promise";

export async function mysqlQuery({ query, values = [] }) {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "alphaa_math",
    user: "root",
    password: "root123",
  });

  try {
    const [results] = await connection.execute(query, values);
    connection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}
export async function getAllClasses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/class`, {
    next: {
      revalidate: 3600,
    },
  });
  const classes = await res.json();
  if (classes.statusText === "SUCCESS") {
    return classes;
  } else {
    return [];
  }
}
export async function getAllSubjectsByClassId(classId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/subject?classid=${classId}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  return await res.json();
}
export async function getAllExercisesBySubjectId(subjectid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/exercise?subjectid=${subjectid}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  return await res.json();
}
export async function getAllProblemsByExerciseId(exerciseid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/problem?exerciseid=${exerciseid}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  return await res.json();
}
