import { db } from "@/utils/db";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;
  const data = db();

  const userInfo = await data.query(`SELECT * FROM users WHERE id = $1`, [id]);
  console.log(userInfo);
  if (userInfo.rowCount == 0) {
    notFound();
  }
  return (
    <div className="bg-[#8A3033] h-screen">
      <p className="pt-10 pl-5 font-noto-serif-display text-[50px] text-[#F3B9C7]">
        Welcome to {userInfo.rows[0].username}'s page
      </p>
    </div>
  );
}
