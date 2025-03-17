import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/db";

export default async function UserFrom() {
  const { userId } = await auth();

  async function handleSubmit(formData) {
    "use server";
    const { username, bio } = Object.fromEntries(formData);
    const data = db();
    data.query(
      `INSERT INTO users (username, bio, clerk_id) VALUES ($1, $2, $3)`,
      [username, bio, userId]
    );
  }
  return (
    <div
      className="bg-no-repeat bg-cover h-screen flex justify-center"
      style={{ backgroundImage: "url('/images/wallpaper.jpg')" }}
    >
      <form action={handleSubmit} className="w-[50%] pt-10 space-y-4">
        <div className="mb-4">
          <label className="text-[15px] font-medium font-delius leading-[35px] text-[#250408]">
            Username:
          </label>
          <input
            name="username"
            placeholder="Enter A Username"
            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-[#F3DDCD] px-2.5 text-[15px] leading-none text-[#8A3033] shadow-[0_0_0_1px] shadow-[#815E5B] outline-none selection:bg-[#250408] selection:text-[#8A3033] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="text-[15px] font-medium font-delius leading-[35px] text-[#250408]">
            Bio:
          </label>
          <textarea
            name="bio"
            placeholder="Enter A Bio"
            className="h-[170px] box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-[#F3DDCD] p-2.5 text-[15px] leading-none text-[#8A3033] shadow-[0_0_0_1px] shadow-[#815E5B] outline-none selection:bg-[#250408] selection:text-[#8A3033] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="font-noto-serif-display mt-2.5 box-border inline-flex h-[35px] w-[40%] items-center justify-center rounded bg-[#8a3033] px-[15px] font-medium leading-none text-[#f3ddcd] shadow-[0_2px_10px] shadow-[#815E5B] hover:bg-[#250408] focus:shadow-[0_0_0_2px] focus:shadow-[#250408] focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
