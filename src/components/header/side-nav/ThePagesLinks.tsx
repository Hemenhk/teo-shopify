"use client";

import { usePagesQuery } from "@/hooks/useQueryHooks";
import Link from "next/link";

export default function ThePagesLinks() {
  const { data: pagesData, isError, isLoading } = usePagesQuery();

  if (isError) {
    return <p>Could not load pages</p>;
  }

  if (isLoading) {
    return <p>Loading pages...</p>;
  }

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
