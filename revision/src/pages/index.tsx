import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const linkList = ["000useCallback"];

  return (
    <main>
      {linkList.map((link) => (
        <Link key={link} href={link}>
          {link}
        </Link>
      ))}
    </main>
  );
}
