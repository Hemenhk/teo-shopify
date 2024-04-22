import { Button } from "@/components/ui/button";
import React from "react";

type CartTotal = {
  cost: any;
  checkoutUrl: any;
};

export default function TheCartTotalBtn({ cost, checkoutUrl }: CartTotal) {
  return (
    <Button className="flex justify-center tracking-widest font-light w-full mx-3 rounded-none bg-black">
      Total: {cost.amount} {cost.currencyCode}
    </Button>
  );
}
