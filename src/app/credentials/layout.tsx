import React, { ReactNode } from "react";

export default function CredentialsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main className="container mx-auto">{children}</main>;
}
