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
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/class`);
}
