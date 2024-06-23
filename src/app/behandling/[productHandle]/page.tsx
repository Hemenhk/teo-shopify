"use client";
import TheProductImages from "@/components/product/TheProductImages";
import TheProductPrice from "@/components/product/TheProductPrice";
import { getProductByHandle } from "@/graphql/queries/product-query";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import TheProductDesc from "@/components/product/TheProductDesc";

import TheAverageRating from "@/components/product/reviews/TheAverageRating";
import ReviewAccordion from "@/components/product/reviews/TheReviewAccordion";

export default function TreatmentPage({
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
    return <div>Laddar...</div>;
  }

  if (isError) {
    return <div>Error laddande av behandling.</div>;
  }

  const product = productData?.data?.productByHandle;

  if (!product) {
    return <div>Ingen behandling hittades.</div>;
  }

  return (
    <main className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-8 h-full py-28">
      <div className="flex flex-col items-center gap-20 md:w-2/4 h-full">
        <TheProductImages product={product} />
        <div className="hidden xl:flex">
          <ReviewAccordion itemHandle={productHandle} />
        </div>
      </div>
      <div className="flex flex-col text-center xl:text-left md:w-[500px] h-full">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {product.vendor}
        </p>
        <h2 className="text-2xl text-center xl:text-left tracking-wide uppercase font-light px-4 md:px-0 py-6">
          {product.title}
        </h2>
        <TheAverageRating productHandle={productHandle} />

        <TheProductPrice product={product} />

        <div className="flex justify-center xl:justify-start">
          <a
            target="_blank"
            href="https://www.bokadirekt.se/places/studio-rex-ab-56997"
          >
            {" "}
            <Button className="uppercase tracking-widest font-normal mt-8 w-[330px] md:w-[400px] mx-auto md:mx-0 rounded-none bg-black">
              Boka din tid
            </Button>{" "}
          </a>
        </div>

        <TheProductDesc product={product} />
        <div className="flex md:hidden">
          <ReviewAccordion itemHandle={productHandle} />
        </div>
      </div>
    </main>
  );
}
