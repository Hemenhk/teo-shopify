"use client";

import { getFeaturedCollection } from "@/graphql/featured-collection-query";
import { getShopInfo } from "@/graphql/shop-query";
import { useQuery } from "@tanstack/react-query";

export default function Home() {

  const { data: collectionData } = useQuery({
    queryKey: ["collection"],
    queryFn:  getFeaturedCollection,
  });

  console.log("collection", collectionData?.data);
  console.log(collectionData?.errors)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  );
}
