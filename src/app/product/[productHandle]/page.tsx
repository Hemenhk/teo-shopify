"use client";
import TheProductImages from "@/components/product/TheProductImages";
import TheProductPrice from "@/components/product/TheProductPrice";
import { getProductByHandle } from "@/graphql/queries/product-query";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import TheProductDesc from "@/components/product/TheProductDesc";
import QuantitySelector from "@/components/product/QuantitySelector";
import { addLineItemToCart } from "@/graphql/mutations/add-to-cart";
import { useToast } from "@/components/ui/use-toast";
import TheProductVariants from "@/components/product/TheProductVariants";

export default function ProductPage({
  params,
}: {
  params: { productHandle: string };
}) {
  const { productHandle } = params;
  const { toast, dismiss } = useToast();
  const [count, setCount] = useState(1);
  const [selectedVariantId, setSelectedVariantId] = useState("");

  const checkoutId = localStorage.getItem("checkout_id") as string;
  const queryClient = useQueryClient();

  const {
    data: productData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProductByHandle(productHandle),
  });
  const { mutateAsync: addLineItem } = useMutation({
    mutationKey: ["add"],
    mutationFn: async () =>
      await addLineItemToCart(checkoutId, productVariantId, count),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["cartItems"] });
    },
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
  const productVariantId = product.variants.nodes[0].id;

  console.log("product", product);
  console.log("product", productData.errors);

  const addToCartHandler = () => {
    addLineItem();
    toast({
      title: `x${count} - ${product.title}`,
      description: `${product.variants.nodes[0].title} added to the cart`,
    });

    setTimeout(() => {
      dismiss();
    }, 1500);
    console.log("okay", addLineItem);
  };

  return (
    <main className="flex flex-col lg:flex-row justify-center items-center gap-8 h-full lg:h-screen pt-28">
      <div className="flex justify-center md:w-2/4 h-full">
        <TheProductImages product={product} />
      </div>
      <div className="flex flex-col text-center md:text-left md:w-[500px] h-full">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {product.vendor}
        </p>
        <h2 className="text-2xl text-center md:text-left tracking-wide uppercase font-light px-4 md:px-0 py-6">
          {product.title}
        </h2>

        <TheProductPrice product={product} />
        <TheProductVariants
          variants={product.variants.nodes}
          selectedVariantId={selectedVariantId}
          onVariantSelect={(variantId: any) => {
            setSelectedVariantId(variantId);
          }}
        />
        <QuantitySelector count={count} setCount={setCount} />
        <div className="flex justify-center lg:justify-start">
            <Button
          onClick={addToCartHandler}
          className="uppercase tracking-widest font-normal mt-8 w-[330px] md:w-[400px] mx-auto md:mx-0 rounded-none bg-black"
        >
          Add to Cart
        </Button>
        </div>
      
        <TheProductDesc product={product} />
      </div>
    </main>
  );
}
