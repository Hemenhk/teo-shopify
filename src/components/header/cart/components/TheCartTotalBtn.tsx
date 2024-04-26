import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

type CartTotal = {
  cost: any;
};

export default function TheCartTotalBtn({ cost }: CartTotal) {
  const router = useRouter();

  const eur = cost.currencyCode === "EUR" && "€"

  const checkoutUrlHandler = () => {
    router.push("/cart");
  };
  return (
    <Button
      onClick={checkoutUrlHandler}
      className="flex justify-center tracking-widest font-light w-full mx-3 rounded-none bg-black"
    >
      Total: {eur}{cost.amount} 
    </Button>
  );
}
