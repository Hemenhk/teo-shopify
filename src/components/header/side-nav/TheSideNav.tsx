import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import TheShopAccordion from "./TheShopAccordion";

const links = [
  { href: "/", handle: "Home" },
  { href: "/page/contact", handle: "Contact Us" },
  { href: "/page/about-us", handle: "About Us" },
];

export default function TheSideNav() {
  const mappedLinks = links.map((link) => (
    <li className="pb-3 border-b mr-8">
      <Link href={link.href} className="text-lg uppercase tracking-wider">
        {link.handle}
      </Link>
    </li>
  ));
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={40} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <ul className="flex flex-col gap-10 pl-16 relative top-36">
          {mappedLinks}
          <TheShopAccordion />
        </ul>
      </SheetContent>
    </Sheet>
  );
}
