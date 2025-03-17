import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import logoImage from "@/../public/images/logo3.png";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        {" "}
        {/* Wrap Image with Link component */}
        <Image
          src={logoImage}
          alt="Fables Logo"
          placeholder="blur"
          width={280}
          className="pt-5"
        />
      </Link>
    </div>
  );
}
