import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import TheShopAccordion from "./TheShopAccordion";
import ThePagesLinks from "./ThePagesLinks";

export default function TheSideNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={40} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <ul className="flex flex-col gap-10 pl-16 relative top-36">
          <li className="pb-3 border-b mr-8">
            <Link href="/" className="text-lg uppercase tracking-wider">
              Home
            </Link>
          </li>

          <TheShopAccordion />

          <ThePagesLinks />
        </ul>
      </SheetContent>
    </Sheet>
  );
}
