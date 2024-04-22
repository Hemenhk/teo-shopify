import React from "react";

type ProductDesc = {
  product: any;
};

export default function TheProductDesc({ product }: ProductDesc) {
  return (
    <div
      className="py-8 px-4 md:px-0"
      dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
    />
  );
}
