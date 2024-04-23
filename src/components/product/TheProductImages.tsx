import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

type ProductImage = {
  product: any;
};

export default function TheProductImages({ product }: ProductImage) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!product || !product.images || !product.images.nodes) {
    return null;
  }
  const productImages: any[] = product.images.nodes;
  console.log("images", productImages);

  const mappedImages =
    productImages &&
    productImages.map((image) => (
      <CarouselItem key={image.id}>
        <Image
          src={image.transformedSrc}
          alt={image.altText || "product image"}
          width={700}
          height={700}
          className="rounded-md"
        />
      </CarouselItem>
    ));

  const circles = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="flex flex-col">
      <Carousel className="w-[300px] md:w-[600px]" setApi={setApi}>
        <CarouselContent>{mappedImages}</CarouselContent>
        <div className="hidden md:flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div className="flex gap justify-center pt-5 text-center text-sm text-muted-foreground">
        {circles.map((circle) => (
          <div
            key={circle}
            className={`size-3 rounded-full mx-1 cursor-pointer ${
              circle === current ? "bg-gray-700" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(circle - 1)}
          />
        ))}
      </div>
    </div>
  );
}
