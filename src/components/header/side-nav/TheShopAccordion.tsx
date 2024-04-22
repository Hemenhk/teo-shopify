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
          <Link href={`/collections/${link.handle}`} className="text-sm uppercase tracking-wider">{link.title}</Link>
        </li>
      ))
      .reverse();

  return (
    <Accordion type="single" collapsible className="w-60">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-normal uppercase tracking-wider">
          SHOP
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-6 py-4">{mappedCollectionLinks}</ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
