import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const linkList = [
    "000useCallback",
    "001useRef",
    "002useContext",
    "003useId",
    "004useReducer",
  ];

  return (
    <main>
      {linkList.map((link) => (
        <>
          <br />
          <Link key={link} href={link}>
            {link}
          </Link>
        </>
      ))}
    </main>
  );
}
