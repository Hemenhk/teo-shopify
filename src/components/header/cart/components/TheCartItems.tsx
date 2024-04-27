"use client";

import Image from "next/image";

import TheRemoveCartItem from "./TheRemoveCartItem";
import TheCartQuantity from "./TheCartQuantity";
import { useCheckout } from "@/context/checkoutContext";

export default function TheCartItems() {
  const { cart } = useCheckout();
  const mappedCartLineItems =
    cart &&
    cart.lines.nodes.map((lineItem: any) => {
      const eur = lineItem.merchandise.price.currencyCode === "EUR" && "€";
      return (
        <li key={lineItem.id} className="border-b pb-6">
          <div className="flex flex-row gap-8">
            <Image
              src={lineItem.merchandise.image.transformedSrc}
              alt={lineItem.merchandise.image.altText || "lineitem image"}
              height={100}
              width={100}
              className="w-full"
            />
            <div className="flex flex-col gap-2">
              <p className="uppercase text-xs tracking-wider text-gray-400">
                {lineItem.merchandise.product.vendor}
              </p>
              <h3 className="uppercase text-sm tracking-wider">
                {lineItem.merchandise.product.title}
              </h3>
              <p className="text-sm tracking-wider font-medium">
                {eur}
                {lineItem.merchandise.price.amount}
              </p>
              <div className="flex items-end gap-4">
                <TheCartQuantity cart={lineItem} />

                <TheRemoveCartItem lineItemId={lineItem.id} />
              </div>
            </div>
          </div>
        </li>
      );
    });

  return <ul className="flex flex-col gap-10 p-6">{mappedCartLineItems}</ul>;
}
