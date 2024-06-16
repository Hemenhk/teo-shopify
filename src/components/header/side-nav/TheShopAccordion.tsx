"use client";

import { getShopLinks } from "@/graphql/queries/shop-links";
import { useQuery } from "@tanstack/react-query";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";

export default function TheShopAccordion() {
  const { data: linkData } = useQuery({
    queryKey: ["shop-link"],
    queryFn: getShopLinks,
  });

  const collectionLinks: any[] = linkData?.data.collections.nodes;

  const mappedCollectionLinks =
    collectionLinks &&
    collectionLinks
      .map((link) => (
        <li key={link.id}>
          <SheetClose asChild>
            <Link
              href={`/collections/${link.handle}`}
              className="text-sm uppercase tracking-wider"
            >
              {link.title}
            </Link>
          </SheetClose>
        </li>
      ))
      .reverse();

  return (
    <Accordion type="single" collapsible className="w-36 md:w-60">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-normal uppercase pt-0 pb-4 tracking-wider">
          SHOP
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-6 py-4">{mappedCollectionLinks}</ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
