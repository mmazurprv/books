import postgres from "postgres";

export const client = postgres(
  "postgres://postgres:password@localhost:5432/books_db",
);
