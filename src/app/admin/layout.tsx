import { Metadata } from "next";
import React from "react";

import AdminLayoutProvider from "@/context/adminContext";
type AdminProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "The dashboard for the store admin",
};

export default async function AdminDashboardLayout({ children }: AdminProps) {
  return (
    <section className="flex flex-row">
      <AdminLayoutProvider>{children}</AdminLayoutProvider>
    </section>
  );
}
