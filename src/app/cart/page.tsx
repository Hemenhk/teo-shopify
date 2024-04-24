"use client";

import TheCartCheckout from "@/components/cart-page/TheCartCheckout";
import TheCartTable from "@/components/cart-page/TheCartTable";

import { getCart } from "@/graphql/queries/cart-checkout";
import { useQuery } from "@tanstack/react-query";

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
      <TheCartTable cartItems={cartItems} />
      <TheCartCheckout cartCost={cartCost} checkoutUrl={cartData?.data.cart.checkoutUrl} />
    </div>
  );
}
