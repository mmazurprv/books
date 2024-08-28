"use server";

import { redirect } from "next/navigation";
import { client } from "./db/postgres";
import { revalidatePath } from "next/cache";

export async function addBook(formData: FormData) {
  // Extract title and genre from the form data
  const title = formData.get("title")?.toString();
  const genre = formData.get("genre")?.toString();

  // Check if title and genre are provided
  if (!title || !genre) {
    console.error("Title or genre is missing.");
    return;
  }

  console.log(`Inserting book: Title - ${title}, Genre - ${genre}`);

  try {
    // Insert the book into the book table
    await client`INSERT INTO book (title, genre) VALUES (${title}, ${genre})`;

    // console.log("Book added successfully!");
  } catch (error) {
    console.error("Error inserting book:", error);
  }

  revalidatePath("/books-data");
  redirect("/books-data");
}
