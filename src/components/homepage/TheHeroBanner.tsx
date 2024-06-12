"use client";
import React from "react";
import { Button } from "../ui/button";
import { useAdminValues } from "@/hooks/useQueryHooks";

export default function TheHeroBanner() {
  const { data: adminData } = useAdminValues();
  console.log("admindata", adminData);
  return (
    <div className="relative z-50 bottom-36 left-24 text-white">
      <div>
        <h6 className="uppercase font-medium tracking-wider text-gray-200">{adminData?.heroSubHeading}</h6>
        <h3 className="text-3xl font-medium uppercase tracking-wider pb-4 pt-2">{adminData?.heroHeading}</h3>
      </div>
      <Button className="bg-white hover:bg-gray-300 font-light uppercase tracking-wider text-black rounded-sm py-6 px-10">
     {adminData?.heroButtonText}
      </Button>
    </div>
  );
}
