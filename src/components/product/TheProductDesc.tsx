import React from "react";

type ProductDesc = {
  product: any;
};

export default function TheProductDesc({ product }: ProductDesc) {
  return (
    <div
      className="py-8"
      dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
    />
  );
}
