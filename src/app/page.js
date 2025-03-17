import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-wallpaper w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className="w-[80%] ">
        <h1 className=" font-noto-serif-display font-medium w-700 text-[70px] text-[#250408] mb-[200px]">
          Spin Tales,
          <div className="font-[500] font-windSong text-[70px] text-center text-[#F3B9C7] mt-10">
            Make Magic...
          </div>
        </h1>
      </div>
    </div>
  );
}
