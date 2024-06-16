import React from "react";

export default function TheCollectionPrice({ item }: { item: any }) {
  return (
    <div>
      {item.compareAtPriceRange?.maxVariantPrice?.amount > 0 ? (
        <div className="flex items-center gap-2">
          <h2 className="text-red-700 text-xl">
            {item.priceRange.maxVariantPrice.currencyCode === "EUR" && "€"}
            {item.priceRange.maxVariantPrice.amount}
          </h2>
          <h2 className="line-through text-slate-600">
            {item.compareAtPriceRange.maxVariantPrice.currencyCode === "EUR" &&
              "€"}{" "}
            {item.compareAtPriceRange.maxVariantPrice.amount}
          </h2>
        </div>
      ) : (
        <h2 className="text-xl">
          {item.priceRange.maxVariantPrice.currencyCode === "EUR" && "€"}
          {item.priceRange.maxVariantPrice.amount}
        </h2>
      )}
    </div>
  );
}
