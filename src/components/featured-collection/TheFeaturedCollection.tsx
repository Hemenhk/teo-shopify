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
    <div className="max-w-6xl mx-auto">
      <TheCollection products={products} />
    </div>
  );
}
