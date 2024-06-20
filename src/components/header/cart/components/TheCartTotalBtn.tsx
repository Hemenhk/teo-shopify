import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { useCheckout } from "@/context/checkoutContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function TheCartTotalBtn() {
  const router = useRouter();
  const { cart } = useCheckout();
  const cost = cart && cart.cost;

  const eur = cost.totalAmount.currencyCode === "EUR" && "€";
  const sek = cost.totalAmount.currencyCode === "SEK" && "KR";

  const checkoutUrlHandler = () => {
    router.push("/kundvagn");
  };
  return (
    <SheetClose asChild>
      <Button
        onClick={checkoutUrlHandler}
        className="flex justify-center tracking-widest font-light w-full mx-3 rounded-none bg-black"
      >
        Totalt: 
        {cost.totalAmount.amount}{sek}
      </Button>
    </SheetClose>
  );
}
