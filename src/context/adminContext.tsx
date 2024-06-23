"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Home from "@/app/page";

export default function AdminLayoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const isReviewPage = pathname === "/admin/recensioner";
  return (
    <>
      {isReviewPage ? (
        <div className="w-full">{children}</div>
      ) : (
        <>
          <div className="w-1/3">{children}</div>
          <div className="w-2/3">
            <Home />
          </div>
        </>
      )}
    </>
  );
}
