import { Button } from "@/components/ui/button";
import { useCheckout } from "@/context/checkoutContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function TheCartTotalBtn() {
  const router = useRouter();
  const { cart } = useCheckout();
  const cost =cart && cart.cost;

  const eur = cost.currencyCode === "EUR" && "€";

  const checkoutUrlHandler = () => {
    router.push("/cart");
  };
  return (
    <Button
      onClick={checkoutUrlHandler}
      className="flex justify-center tracking-widest font-light w-full mx-3 rounded-none bg-black"
    >
      Total: {eur}
      {cost.amount}
    </Button>
  );
}
