import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import TheShopAccordion from "./TheShopAccordion";
import TheSocialMediaIcons from "./TheSocialMediaIcons";
import { useSession } from "next-auth/react";

export default function TheSideNav() {
  const { data: session } = useSession();

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={40} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <ul className="flex flex-col gap-10 pl-16 relative top-36">
          <li className="pb-3 border-b mr-8">
            <SheetClose asChild>
              <Link href="/" className="text-lg uppercase tracking-wider">
                Hem
              </Link>
            </SheetClose>
          </li>
          <TheShopAccordion />
          <li className="pb-3 border-b mr-8">
            <SheetClose asChild>
              <Link
                href="/contact"
                className="text-lg uppercase tracking-wider"
              >
               Kontakta Oss
              </Link>
            </SheetClose>
          </li>
          <li className="pb-3 border-b mr-8">
            <SheetClose asChild>
              <Link
                href="/page/about-us"
                className="text-lg uppercase tracking-wider"
              >
                Om Oss
              </Link>
            </SheetClose>
          </li>
          {session ? (
            <SheetClose asChild>
              <Link
                href="/admin"
                className="text-lg uppercase tracking-wider pb-3 border-b mr-8"
              >
                Administratörsida
              </Link>
            </SheetClose>
          ) : (
            ""
          )}
          <TheSocialMediaIcons />
        </ul>
      </SheetContent>
    </Sheet>
  );
}
