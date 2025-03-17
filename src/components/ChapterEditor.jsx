"use client";
import TextEditor from "@/components/editor";
import { useState } from "react";

export default function ChapterEditor() {
  const [post, setPost] = useState("");
  const handleSubmit = async (eve) => {
    eve.preventDefault();
    const { content } = Object.fromEntries(TextEditor);
    const data = db();
    data.query(`INSERT INTO chapters (content) VALUES ($1)`, [content]);
  };

  const onChange = (content) => {
    console.log(content);
    setPost(content);
  };
  return (
    <div
      className="bg-no-repeat bg-cover h-screen flex justify-center"
      style={{ backgroundImage: "url('/images/wallpaper.jpg')" }}
    >
      <div className="max-w-3xl mx-auto py-8">
        <TextEditor content={post} action={onChange} />
        <div className="flex justify-center">
          <button
            type="submit"
            className="font-noto-serif-display mt-2.5 box-border inline-flex h-[35px] w-[40%] items-center justify-center rounded bg-[#8a3033] px-[15px] font-medium leading-none text-[#f3ddcd] shadow-[0_2px_10px] shadow-[#815E5B] hover:bg-[#250408] focus:shadow-[0_0_0_2px] focus:shadow-[#250408] focus:outline-none"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
