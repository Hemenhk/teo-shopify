import React from "react";

type ProductVariant = {
  variants: any[];
  onVariantSelect: (variantId: any) => void;
  selectedVariantId: string;
};

export default function TheProductVariants({
  variants,
  onVariantSelect,
  selectedVariantId,
}: ProductVariant) {
  const selectVariants =
    variants.length > 1
      ? variants.map((variant: any) => (
          <div
            key={variant.id}
            className={`flex justify-center items-center cursor-pointer border-2 rounded-[2px] w-16 px-3 py-3 ${
              selectedVariantId === variant.id
                ? "border-[#000]"
                : "border-[#dbdbdb]"
            } transition duration-500 ease-out hover:border-[#000]`}
            onClick={() => {
              onVariantSelect(variant.id);
            }}
          >
            <p className="text-sm font-medium uppercase tracking-wide">
              {variant.title}
            </p>
          </div>
        ))
      : "";

  return (
    <div className="flex flex-col items-center xl:items-start gap-5 pt-5">
      {variants.length > 1 ?  <p className="text-sm">Size:</p> : ""}
      <div className="flex flex-wrap gap-2">{selectVariants}</div>
    </div>
  );
}
