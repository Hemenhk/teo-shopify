"use client";
import { getCart } from "@/graphql/queries/cart-checkout";
import { useQuery } from "@tanstack/react-query";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingBag } from "lucide-react";
import TheCartItems from "./components/TheCartItems";
import TheCartTotalBtn from "./components/TheCartTotalBtn";

export default function TheCart() {
  const checkoutId = localStorage.getItem("checkout_id") || "";
  console.log(checkoutId);
  const {
    data: cartData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => getCart(checkoutId),
  });

  if (!checkoutId) {
    return <div>No checkout ID found.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !cartData?.data) {
    return <div>Error fetching cart data.</div>;
  }
  console.log("cartData", cartData?.data.cart);
  const cart = cartData?.data.cart;
  const cost = cart.cost.totalAmount;
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent side={"right"} className="p-0">
        <SheetHeader className="border-b p-6">
          <SheetTitle className="uppercase text-xl font-normal tracking-widest">
            Cart
          </SheetTitle>
        </SheetHeader>
        <TheCartItems cart={cart} />
        <SheetFooter className="absolute bottom-16 w-full">
          <TheCartTotalBtn cost={cost} checkoutUrl={cart.checkoutUrl} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
