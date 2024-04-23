"use client";

import { getPages } from "@/graphql/queries/page-query";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function ThePagesLinks() {
  const { data: pagesData } = useQuery({
    queryKey: ["pages"],
    queryFn: getPages,
  });

  const pages: any[] = pagesData?.data.pages.nodes;
  console.log("all pages", pagesData?.data);
  return (
    <>
      {pages &&
        pages.map((page: any) => (
          <li key={page.id} className="pb-3 border-b mr-8">
            <Link
              href={`/page/${page.handle}`}
              className="text-lg uppercase tracking-wider"
            >
              {page.title}
            </Link>
          </li>
        ))}
    </>
  );
}
