import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";
import { TextIcon } from "@radix-ui/react-icons";

import { Toggle } from "../ui/toggle";
import { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import FontFamily from "@tiptap/extension-font-family";

export default function MenuBar({ editor }) {
  if (!editor) {
    return null;
  }
  const FontOptions = [
    {
      label: "Inter",
      fontFamily: "Inter",
    },
    {
      label: "Comic Sans",
      fontFamily: '"Comic Sans MS", "Comic Sans"',
    },
    {
      label: "Serif",
      fontFamily: "serif",
    },
    {
      label: "Monospace",
      fontFamily: "monospace",
    },
    {
      label: "Cursive",
      fontFamily: "cursive",
    },
    {
      label: "CSS Var",
      fontFamily: "var(--title-font-family)",
    },
    {
      label: "Exo 2",
      fontFamily: '"Exo 2"',
    },
  ];

  const Options = [
    {
      icon: <Heading1 className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      preesed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      preesed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      preesed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Bold className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      preesed: editor.isActive("bold"),
    },
    {
      icon: <Italic className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      preesed: editor.isActive("italic"),
    },
    {
      icon: <Strikethrough className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      preesed: editor.isActive("strike"),
    },
    {
      icon: <AlignLeft className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      preesed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      preesed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRight className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      preesed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <List className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      preesed: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered className="size-4 text-[#8A3033]" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      preesed: editor.isActive("orderedList"),
    },
    {
      icon: <Highlighter className="size-4 text-[#8A3033]" />,
      onClick: () =>
        editor.chain().focus().toggleHighlight({ color: "#9dada9" }).run(),
      preesed: editor.isActive("highlight", { color: "#9dada9" }),
    },
  ];
  return (
    <div className="border rounded-md p-1 mb-3  bg-[#F3B9C7] bg-opacity-85 space-x-5 z-50">
      {Options.map((option, index) => (
        <Toggle
          key={index}
          pressed={option.preesed}
          onPressedChange={option.onClick}
          className="ml-6"
        >
          {option.icon}
        </Toggle>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Toggle className="ml-10">
            <TextIcon className="size-4 text-[#8A3033]" />
          </Toggle>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-[#F3B9C7]">
          {FontOptions.map((font, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() =>
                editor.chain().focus().setFontFamily(font.fontFamily).run()
              }
              className={`cursor-pointer ${
                editor.isActive("textStyle", { fontFamily: font.fontFamily })
                  ? "font-bold"
                  : ""
              }`}
            >
              {font.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
