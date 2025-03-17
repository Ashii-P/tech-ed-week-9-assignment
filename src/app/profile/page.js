import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import UserForm from "@/components/UserForm";

export default async function Page() {
  const { userId, redirectToSignIn } = await auth();
  // console.log(authInfo)
  const data = db();
  const userInfo = await data.query(`SELECT * FROM users WHERE clerk_id = $1`, [
    userId,
  ]);

  if (!userId) return redirectToSignIn();
  console.log(userInfo);
  if (userInfo.rowCount == 0) {
    return (
      <div>
        <UserForm />
      </div>
    );
  }
  return (
    <div className="bg-[#F3B9C7] h-screen text-[#8A3033]">
      <h1 className="pt-10 pl-5 font-noto-serif-display text-[50px]">
        Hello, {userInfo.rows[0].username}
      </h1>
      <h4 className="pl-5 font-delius text-[20px]">
        Bio: {userInfo.rows[0].bio}
      </h4>
    </div>
  );
}
