import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type ProductImage = {
  product: any;
};

export default function TheProductImages({ product }: ProductImage) {
    if (!product || !product.images || !product.images.nodes) {
        return null; 
      }
    const productImages: any[] = product.images.nodes
    console.log("images", productImages)

  const mappedImages = productImages && productImages.map((image) => (
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
  return (
    <Carousel className="w-[600px]">
      <CarouselContent>{mappedImages}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
