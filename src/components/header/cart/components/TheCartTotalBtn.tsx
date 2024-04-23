import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

type CartTotal = {
  cost: any;
  checkoutUrl: any;
};

export default function TheCartTotalBtn({ cost, checkoutUrl }: CartTotal) {
  const router = useRouter();

  const checkoutUrlHandler = () => {
    router.push(checkoutUrl);
  };
  return (
    <Button
      onClick={checkoutUrlHandler}
      className="flex justify-center tracking-widest font-light w-full mx-3 rounded-none bg-black"
    >
      Total: {cost.amount} {cost.currencyCode}
    </Button>
  );
}
