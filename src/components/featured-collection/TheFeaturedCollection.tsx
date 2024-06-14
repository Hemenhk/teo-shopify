"use client";
import { getFeaturedCollection } from "@/graphql/queries/featured-collection-query";
import { useQuery } from "@tanstack/react-query";
import TheCollection from "../collections/TheCollection";

export default function TheFeaturedCollection() {
  const { data: collectionData } = useQuery({
    queryKey: ["collection"],
    queryFn: getFeaturedCollection,
  });

  const products: any[] = collectionData?.data.collection.products.nodes;

  return (
    <div className="flex flex-col items-center justify-center max-w-6xl py-12 px-5">
      <h2 className="text-2xl uppercase tracking-wider pb-16">
        Featured Collection
      </h2>
      <TheCollection products={products} />
    </div>
  );
}
