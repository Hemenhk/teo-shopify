"use client";
import React from "react";
import { Button } from "../ui/button";
import { useAdminValues } from "@/hooks/useQueryHooks";

export default function TheHeroBanner() {
  const { data: adminData } = useAdminValues();
  console.log("admindata", adminData);
  return (
    <div className="relative w-full md:w-3/5 z-50 mx-auto md:mx-0 bottom-72 md:left-24 text-white text-center md:text-left">
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
