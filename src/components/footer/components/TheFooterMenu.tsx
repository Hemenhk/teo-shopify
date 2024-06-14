import { usePagesQuery } from "@/hooks/useQueryHooks";
import Link from "next/link";
import React from "react";

export default function TheFooterMenu() {
  const { data: pagesData, isError, isLoading } = usePagesQuery();

  if (isError) {
    return <p>Could not load pages</p>;
  }

  if (isLoading) {
    return <p>Loading pages...</p>;
  }

  const pages: any[] = pagesData?.data.pages.nodes;

  return (
    <div className="flex flex-col gap-2">
      {pages &&
        pages.map((page: any) => (
          <p className="tracking-wide text-xs" key={page.id}>
            <Link href={`/page/${page.handle}`}>{page.title}</Link>
          </p>
        ))}
      <p className="tracking-wide text-xs">
        <Link href={"/credentials/signin"}>Sign in</Link>
      </p>
    </div>
  );
}
