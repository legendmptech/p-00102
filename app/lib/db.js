import mysql from "mysql2/promise";

export async function mysqlQuery({ query, values = [] }) {
  const connection = await mysql.createConnection({
    host: process.env.NEXT_PUBLIC_HOST,
    database: process.env.NEXT_PUBLIC_DB_NAME,
    user: process.env.NEXT_PUBLIC_USER,
    password: process.env.NEXT_PUBLIC_PASSWORD,
  });

  try {
    const [results] = await connection.execute(query, values);
    connection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
  }
}
export async function postNewProblem(data) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/problem`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Response status : ", res.status);
    }
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error("Could not create a problem...");
  }
}
export async function updateProblemById(data) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/problem`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Response status : ", res.status);
    }
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error("Could not Update problem...");
  }
}
export async function deleteProblemById(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/problem?problemid=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw new Error("Response status : ", res.status);
    }
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error("Could not DELETE problem...");
  }
}
export async function getAllClasses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/classe`, {
    next: {
      revalidate: 0,
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
        revalidate: 0,
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
        revalidate: 0,
      },
    }
  );
  const chapters = await res.json();
  if (chapters?.statusText == "SUCCESS") {
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
        revalidate: 0,
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
