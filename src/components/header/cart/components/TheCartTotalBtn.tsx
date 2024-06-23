import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { useCheckout } from "@/context/checkoutContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function TheCartTotalBtn() {
  const router = useRouter();
  const { cart } = useCheckout();
  const cost = cart && cart.cost;

  const sek = cost.totalAmount.currencyCode === "SEK" && "kr";

  const redirectToCartHandler = () => {
    router.push("/kundvagn");
  };

  const checkoutUrlHandler = () => {
    router.push(cart?.checkoutUrl);
  };
  return (
    <SheetClose asChild>
      <div className="flex flex-col w-full mb-5">
        <div className="flex md:hidden">
          <Button
            onClick={checkoutUrlHandler}
            className="flex justify-center tracking-widest font-light w-full mx-3 rounded-none bg-black"
          >
            Totalt:
            {cost.totalAmount.amount}
            {sek}
          </Button>
        </div>
        <div className="hidden md:flex">
          <Button
            onClick={redirectToCartHandler}
            className="flex justify-center tracking-widest font-light w-full mx-3 rounded-none bg-black"
          >
            Totalt:
            {cost.totalAmount.amount}{" "}
            {sek}
          </Button>
        </div>
      </div>
    </SheetClose>
  );
}
