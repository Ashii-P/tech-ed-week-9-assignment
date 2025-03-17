"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export async function createBook(formData) {
  const { userId } = await auth();
  const { title, author, description, cover_img } =
    Object.fromEntries(formData);
  const genres = JSON.parse(formData.get("genres"));
  const data = db();
  const result = await data.query(
    `INSERT INTO book (user_id, title, author, description, cover_img) 
     VALUES ($1, $2, $3, $4, $5) RETURNING id`,
    [userId, title, author, description, cover_img]
  );

  const bookId = result.rows[0]?.id;
  if (bookId && genres.length > 0) {
    const insertGenre = genres.map((genreId) =>
      data.query(
        `INSERT INTO book_genres (book_id, genre_id) VALUES ($1, $2)`,
        [bookId, genreId]
      )
    );
    await Promise.all(insertGenre);
  }

  return bookId;
}
