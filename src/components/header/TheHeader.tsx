"use client";
import React from "react";
import TheSideNav from "./side-nav/TheSideNav";
import TheCart from "./cart/TheCart";
import { useQuery } from "@tanstack/react-query";
import { getShopInfo } from "@/graphql/queries/shop-query";
import Image from "next/image";
import Link from "next/link";

export default function TheHeader() {
  const { data: logoData } = useQuery({
    queryKey: ["logo"],
    queryFn: getShopInfo,
  });

  const logo = logoData?.data.shop.brand.logo.image.url;
  const logoAlt = logoData?.data.shop.brand.logo.image.altText;

  console.log("logo", logo);

  return (
    <header className="flex justify-between items-center p-8 px-12 shadow-md">
      <TheSideNav />
      <Link href={"/"}>
        <Image
          src={logo}
          alt={logoAlt || "logo image"}
          height={75}
          width={75}
        />
      </Link>
      <TheCart />
    </header>
  );
}
