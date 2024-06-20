import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import TheCollectionPrice from "./TheCollectionPrice";

export default function TheCollection({ products }: { products: any[] }) {
  const collectionProducts =
    products &&
    products.map((item) => (
      <Card key={item.id}>
        <CardContent className="p-0">
          <Link href={`/produkt/${item.handle}`}>
            <Image
              className="w-full h-full object-cover rounded-t-lg"
              src={item.featuredImage.transformedSrc}
              alt={item.featuredImage.altText || "product image"}
              width={200}
              height={200}
            />
          </Link>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 mt-4">
          <p className="text-gray-400">{item.vendor}</p>
          <h2 className="text-ellipsis uppercase text-lg font-medium">
            {item.title}
          </h2>
          <TheCollectionPrice item={item} />
        
        </CardFooter>
      </Card>
    ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 px-10">
      {collectionProducts}
    </div>
  );
}
