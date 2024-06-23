import TheTreatment from "@/components/treatment/TheTreatment";
import { getProductByHandle } from "@/graphql/queries/product-query";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { productHandle: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const productHandle = params.productHandle;

  const product = await getProductByHandle(productHandle);

  return {
    title: product?.data?.productByHandle?.title,
    description: product?.data?.productByHandle?.description,
    openGraph: {
      images: product?.data?.productByHandle?.images?.nodes[0]?.transformedSrc,
    },
  };
}

export default function TreatmentPage({
  params,
}: {
  params: { productHandle: string };
}) {
  const { productHandle } = params;

  return (
    <>
      <TheTreatment productHandle={productHandle} />
    </>
  );
}
