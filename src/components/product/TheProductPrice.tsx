import classes from "./styles/Price.module.css";

type ProductPrice = {
  product: any;
};

export default function TheProductPrice({ product }: ProductPrice) {
  const pricePercentageDifference =
    ((product.priceRange.maxVariantPrice.amount -
      product.compareAtPriceRange.maxVariantPrice.amount) /
      product.compareAtPriceRange.maxVariantPrice.amount) *
    100;

  const comparePrice =
    product && product.compareAtPriceRange.maxVariantPrice.amount > 0 ? (
      <div className="flex items-center gap-4">
        <p className="text-red-700 text-2xl font-semibold">
          {product.priceRange.maxVariantPrice.amount}
          {product.priceRange.maxVariantPrice.currencyCode === "SEK" && "KR"}
        </p>
        <p className="line-through text-slate-600">
          {product.compareAtPriceRange.maxVariantPrice.amount}
          {product.compareAtPriceRange.maxVariantPrice.currencyCode === "SEK" &&
            "KR"}
        </p>
        <p className={classes.priceTag}>
          {pricePercentageDifference.toFixed(0)}%
        </p>
      </div>
    ) : (
      <p className="text-xl font-medium">
        {product.priceRange.maxVariantPrice.amount}
        {product.priceRange.maxVariantPrice.currencyCode === "SEK" && "KR"}
      </p>
    );

  return (
    <div className="text-center xl:text-left border-b py-8 w-64 mx-auto xl:mx-0">
      {comparePrice}
    </div>
  );
}
