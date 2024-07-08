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
    return classes?.classes;
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
  const subjects = await res.json();
  if (subjects.statusText === "SUCCESS") {
    return subjects?.subjects;
  } else {
    return [];
  }
}
export async function getAllChaptersBySubjectId(subjectid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/chapter?subjectid=${subjectid}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const chapters = await res.json();
  if (chapters.statusText === "SUCCESS") {
    return chapters?.chapters;
  } else {
    return [];
  }
}
export async function getAllExercisesByChapterId(chapterid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/exercise?chapterid=${chapterid}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const exercises = await res.json();
  if (exercises.statusText === "SUCCESS") {
    return exercises?.exercises;
  } else {
    return [];
  }
}
export async function getAllProblemsByExerciseId(exerciseid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/problems?ex=${exerciseid}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  const data = await res.json();

  if (data.statusText == "SUCCESS") {
    return data;
  } else {
    return {
      problems: [],
      exercise: "",
    };
  }
}
export async function getProblemById(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/problem?id=${id}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  const data = await res.json();

  if (data.statusText == "SUCCESS") {
    return data?.problem;
  } else {
    return {};
  }
}
