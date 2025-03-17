import pg from "pg";

export function db() {
  let data;
  if (!data) {
    data = new pg.Pool({ connectionString: process.env.DATA });
  }
  return data;
}
