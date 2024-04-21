"use client";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getFeaturedCollection } from "@/graphql/featured-collection-query";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function TheFeaturedCollection() {
    const { data: collectionData } = useQuery({
        queryKey: ["collection"],
        queryFn: getFeaturedCollection,
      });
    
      console.log("collection", collectionData?.data.collection);
    
      const products: any[] = collectionData?.data.collection.products.nodes;
      console.log("products", products);
      console.log(collectionData?.errors);
    
      const featuredCollectionProducts =
        products &&
        products.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-0">
              <Image
                className="w-full h-full object-cover rounded-t-lg"
                src={item.featuredImage.transformedSrc}
                alt={item.featuredImage.altText || "product image"}
                width={200}
                height={200}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 mt-4">
              <p className="text-gray-400">{item.vendor}</p>
              <h2 className="text-ellipsis uppercase text-lg font-medium">
                {item.title}
              </h2>
    
              <p className="text-xl">
                {item.priceRange.maxVariantPrice.currencyCode}{" "}
                {item.priceRange.maxVariantPrice.amount}
              </p>
            </CardFooter>
          </Card>
        ));
  return (
    <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
      {featuredCollectionProducts}
    </div>
  </div>
  )
}
