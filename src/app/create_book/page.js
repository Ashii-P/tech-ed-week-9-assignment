import BookForm from "@/components/BookForm";
import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";

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
        <BookForm />
      </div>
    );
  }
}
