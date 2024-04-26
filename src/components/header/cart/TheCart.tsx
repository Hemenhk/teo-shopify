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
import { Badge } from "@/components/ui/badge";

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
    return <ShoppingBag />;
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
        <div className="relative">
          <ShoppingBag size={30}/>
          <Badge className="bg-red-800 hover:bg-red-800 size-5 rounded-full text-xs flex justify-center items-center absolute top-0 right-0 -mt-1.5 -mr-1.5">
            {cart.totalQuantity}
          </Badge>
        </div>
      </SheetTrigger>
      <SheetContent side={"right"} className="p-0">
        <SheetHeader className="border-b p-6">
          <SheetTitle className="uppercase text-xl font-normal tracking-widest">
            Cart
          </SheetTitle>
        </SheetHeader>
        <TheCartItems cart={cart} />
        <SheetFooter className="absolute bottom-16 w-full">
          <TheCartTotalBtn cost={cost} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
