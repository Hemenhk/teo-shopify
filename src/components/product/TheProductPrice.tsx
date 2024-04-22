type ProductPrice = {
  product: any;
};

export default function TheProductPrice({ product }: ProductPrice) {
  return (
    <div className="text-center md:text-left border-b pb-8 w-64 mx-auto md:mx-0">
      <p className="text-xl font-medium">
        {product.priceRange.maxVariantPrice.amount}{" "}
        {product.priceRange.maxVariantPrice.currencyCode}
      </p>
    </div>
  );
}
