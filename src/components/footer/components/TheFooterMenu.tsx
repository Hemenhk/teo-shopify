import { usePagesQuery } from "@/hooks/useQueryHooks";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function TheFooterMenu() {
  const { data: pagesData, isError, isLoading } = usePagesQuery();
  const {data: session} = useSession();

  if (isError) {
    return <p>Could not load pages</p>;
  }

  if (isLoading) {
    return <p>Loading pages...</p>;
  }

  const signOutHandler = () => {
    signOut();
  };

  const pages: any[] = pagesData?.data.pages.nodes;

  return (
    <div className="flex flex-col gap-2">
      {pages &&
        pages.map((page: any) => (
          <p className="tracking-wide text-xs" key={page.id}>
            <Link href={`/page/${page.handle}`}>{page.title}</Link>
          </p>
        ))}
      {!session ? (
        <p className="tracking-wide text-xs">
          <Link href={"/credentials/signin"}>Logga in</Link>
        </p>
      ) : (
        <p className="tracking-wide text-xs cursor-pointer" onClick={signOutHandler}>
         Logga ut
        </p>
      )}
    </div>
  );
}
