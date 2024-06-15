"use client";

import TheCartCheckout from "@/components/cart-page/TheCartCheckout";
import TheCartTable from "@/components/cart-page/TheCartTable";

import { getCart } from "@/graphql/queries/cart-checkout";
import { useQuery } from "@tanstack/react-query";
import image from "../../../public/empty-cart.png";
import Image from "next/image";

export default function CartPage() {
  const checkoutId = localStorage.getItem("checkout_id") || "";

  const { data: cartData } = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => getCart(checkoutId),
  });

  console.log("cart page", cartData?.data);
  const cartCost = cartData?.data.cart.cost.totalAmount;
  const cartItems: any[] = cartData?.data.cart.lines.nodes;

  return (
    <div className="m-48">
      {!cartData ? (
        <>
          <TheCartTable cartItems={cartItems} />
          <TheCartCheckout
            cartCost={cartCost}
            checkoutUrl={cartData?.data.cart.checkoutUrl}
          />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Image src={image} alt="image" width={200} height={200} />
          <p className="text-xl">Your cart is empty!</p>
        </div>
      )}
    </div>
  );
}
