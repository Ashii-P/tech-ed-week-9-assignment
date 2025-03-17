import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Page({ params }) {
  const { userId, redirectToSignIn } = await auth();
  // console.log(authInfo)
  if (!userId) return redirectToSignIn();
  const data = db();
  const userInfo = await data.query(`SELECT * FROM users WHERE clerk_id = $1`, [
    userId,
  ]);

  const { id } = await params;

  const bookInfo = await data.query(`SELECT * FROM book WHERE id = $1`, [id]);
  const genreInfo = await data.query(`SELECT * FROM book_genre WHERE id = $1`, [
    id,
  ]);
  console.log(bookInfo);

  return (
    <div className="bg-[#F3B9C7] h-screen text-[#8A3033]">
      <h1 className="pt-10 pl-5 font-noto-serif-display text-[50px]">
        Hello, {userInfo.rows[0].username}
      </h1>
      <div className="pt-5 pl-5">
        <h2 className="text-[40px] font-noto-serif-display">
          Book Information
        </h2>
        <p>Title: {bookInfo.rows[0].title}</p>
        <p>Author: {bookInfo.rows[0].author}</p>
        <p>Description: {bookInfo.rows[0].description}</p>
      </div>
      <Link href="/add_chap">Add Chapter</Link>
    </div>
  );
}
