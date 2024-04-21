"use client";
import { getCollectionByHandle } from "@/graphql/collections";
import { useQuery } from "@tanstack/react-query";
import TheCollection from "@/components/collections/TheCollection";

export default function CollectionByHandlePage({
  params,
}: {
  params: { collectionHandle: string };
}) {
  const { collectionHandle } = params;

  const { data: collectionData } = useQuery({
    queryKey: ["collectionHandle"],
    queryFn: () => getCollectionByHandle(collectionHandle),
  });

  const products: any[] =
    collectionData?.data.collectionByHandle.products.nodes;

  //

  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto py-24">
      <h2 className="text-2xl uppercase tracking-wider pb-16">
        {collectionData?.data.collectionByHandle.title}
      </h2>
      <TheCollection products={products} />
    </div>
  );
}
