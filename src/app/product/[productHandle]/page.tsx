"use client"
import { getProductByHandle } from "@/graphql/product-query";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function ProductPage({
  params,
}: {
  params: { productHandle: string };
}) {
  const { productHandle } = params;

  const { data: productData } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProductByHandle(productHandle),
  });

  console.log("product", productData?.data)
  console.log("product", productData?.errors)
  return <div>
    {productData?.data.productByHandle.title}
  </div>;
}
