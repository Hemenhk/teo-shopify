type ProductPrice = {
  product: any;
};

export default function TheProductPrice({ product }: ProductPrice) {
  return (
    <div className="border-b pb-8 w-[300px]">
      <p className="text-xl font-medium">
        {product.priceRange.maxVariantPrice.amount}{" "}
        {product.priceRange.maxVariantPrice.currencyCode}
      </p>
    </div>
  );
}
