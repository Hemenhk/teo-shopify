"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const navlinks = [
  { title: "Hem", href: "/" },
  { title: "Annoncering", href: "/admin/design/annoncering" },
  { title: "Hero Bannern", href: "/admin/design/hero-bannern" },
  { title: "Footern", href: "/admin/design/footern" },
];
export default function TheDesignPage() {
  const router = useRouter();

  const goBackHandler = () => {
    router.push("/admin");
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center justify-between pr-5 border-b">
        <h1 className="uppercase text-xl tracking-wider pl-5 py-5">
          designsida
        </h1>
        <BsFillArrowLeftCircleFill
            size={30}
            cursor={"pointer"}
            onClick={goBackHandler}
          />
      </div>
      <div className="pl-3 pt-5">
        <ul className="flex flex-col gap-2 relative w-full">
          {navlinks.map((link) => (
            <li
              key={link.href}
              className="flex items-center text-left uppercase p-3 w-full rounded-sm transition duration-300 ease-out hover:bg-gray-100"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
