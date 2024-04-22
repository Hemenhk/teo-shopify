"use client";
import TheProductImages from "@/components/product/TheProductImages";
import TheProductPrice from "@/components/product/TheProductPrice";
import { getProductByHandle } from "@/graphql/product-query";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { AddToCartButton } from "@shopify/hydrogen-react";
import { Button } from "@/components/ui/button";
import TheProductDesc from "@/components/product/TheProductDesc";
import QuantitySelector from "@/components/product/QuantitySelector";

export default function ProductPage({
  params,
}: {
  params: { productHandle: string };
}) {
  const { productHandle } = params;

  const {
    data: productData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProductByHandle(productHandle),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product.</div>;
  }

  const product = productData?.data?.productByHandle;

  if (!product) {
    return <div>Product not found.</div>;
  }
  console.log("product", product);
  console.log("product", productData?.errors);

  return (
    <main className="flex justify-center items-center gap-8 h-screen pt-28">
      <div className="flex justify-center md:w-2/4 h-full">
        <TheProductImages product={product} />
      </div>
      <div className="flex flex-col md:w-[500px] h-full">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {product.vendor}
        </p>
        <h2 className="text-2xl tracking-wide uppercase font-light w-4/5 py-6">
          {product.title}
        </h2>

        <TheProductPrice product={product} />
        <QuantitySelector />
        <Button className="uppercase tracking-widest font-normal mt-8 w-[400px] rounded-none bg-black">
          Add to Cart
        </Button>
        <TheProductDesc product={product} />
      </div>
    </main>
  );
}
