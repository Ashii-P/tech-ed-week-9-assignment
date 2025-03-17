"use client";
import * as Form from "@radix-ui/react-form";
import { useRouter } from "next/navigation";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { createBook } from "./CreateBook";
import { useState } from "react";

export default function BookForm() {
  const router = useRouter();
  const [genres, setGenres] = useState([]);

  const handleGenreChange = (value) => {
    setGenres(value);
  };
  async function handleSubmit(eve) {
    eve.preventDefault();
    const formData = new FormData(eve.currentTarget);
    formData.append("genres", JSON.stringify(genres));
    const bookId = await createBook(formData);
    if (bookId) {
      router.push(`/update_book/${bookId}`);
    }
  }
  return (
    <div
      className="bg-no-repeat bg-cover h-screen flex justify-center"
      style={{ backgroundImage: "url('/images/wallpaper.jpg')" }}
    >
      <Form.Root className="w-[50%] pt-10" onSubmit={handleSubmit}>
        <Form.Field className="mb-2.5 grid" name="title">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium font-delius leading-[35px] text-[#250408]">
              Book Title:
            </Form.Label>
            <Form.Message
              className="text-[13px] text-[#250408] opacity-80"
              match="valueMissing"
            >
              Please enter your book title
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-[#F3DDCD] px-2.5 text-[15px] leading-none text-[#8A3033] shadow-[0_0_0_1px] shadow-[#815E5B] outline-none selection:bg-[#250408] selection:text-[#8A3033] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="author">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium font-delius leading-[35px] text-[#250408]">
              Author Username:
            </Form.Label>
            <Form.Message
              className="text-[13px] text-[#250408] opacity-80"
              match="valueMissing"
            >
              Please enter your username
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-[#F3DDCD] px-2.5 text-[15px] leading-none text-[#8A3033] shadow-[0_0_0_1px] shadow-[#815E5B] outline-none selection:bg-[#250408] selection:text-[#8A3033] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="cover_img">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium font-delius leading-[35px] text-[#250408]">
              Book Cover URL:
            </Form.Label>
            <Form.Message
              className="text-[13px] text-[#250408] opacity-80"
              match="valueMissing"
            >
              Please enter your book cover URL
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-[#F3DDCD] px-2.5 text-[15px] leading-none text-[#8A3033] shadow-[0_0_0_1px] shadow-[#815E5B] outline-none selection:bg-[#250408] selection:text-[#8A3033] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="description">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-[#250408] font-delius">
              Book Description:
            </Form.Label>
            <Form.Message
              className="text-[13px text-[#250408] opacity-80"
              match="valueMissing"
            >
              Please enter a book description
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea
              className="h-[170px] box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-[#f3ddcd] p-2.5 text-[15px] leading-none text-[#8a3033] shadow-[0_0_0_1px] shadow-[#815E5B] outline-none selection:bg-[#250408] selection:text-[#8A3033] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              required
            />
          </Form.Control>
        </Form.Field>
        <div className="mb-4 w-full mt-10">
          <label className="text-[15px] font-medium font-delius leading-[35px] text-[#250408]">
            Select Genre:
          </label>
          <ToggleGroup.Root
            type="multiple"
            className="grid grid-cols-4 gap-2 mt-2"
            onValueChange={handleGenreChange}
            value={genres}
          >
            <ToggleGroup.Item
              value="1"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("1") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Romance
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="2"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("2") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              FanFiction
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="3"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("3") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Teen Fiction
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="4"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("4") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Vampires
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="5"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("5") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Werewolf
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="6"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("6") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Historical Fiction
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="7"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("7") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Horror
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="8"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("8") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Thriller
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="9"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("9") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              SciFi
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="10"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("10") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Mystery
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="11"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("11") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Adventure
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="12"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("12") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              LGBTQ+
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="13"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("13") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Poetry
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="14"
              className={`px-2 py-1 text-[12px] rounded shadow-md font-medium text-[#F3DDCD] transition ${
                genres.includes("14") ? "bg-[#250408]" : "bg-[#8a3033]"
              } hover:bg-[#250408]`}
            >
              Fantasy
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
        <div className="flex justify-center">
          {" "}
          <Form.Submit asChild>
            <button className="font-noto-serif-display mt-2.5 box-border inline-flex h-[35px] w-[40%] items-center justify-center rounded bg-[#8a3033] px-[15px] font-medium leading-none text-[#f3ddcd] shadow-[0_2px_10px] shadow-[#815E5B] hover:bg-[#250408] focus:shadow-[0_0_0_2px] focus:shadow-[#250408] focus:outline-none">
              Post Book
            </button>
          </Form.Submit>
        </div>
      </Form.Root>
    </div>
  );
}
