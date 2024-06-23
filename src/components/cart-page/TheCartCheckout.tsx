"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type CartCheckout = {
  cartCost: any;
  checkoutUrl: any;
};

export default function TheCartCheckout({
  cartCost,
  checkoutUrl,
}: CartCheckout) {
  const router = useRouter();
  const sek = cartCost?.currencyCode === "SEK" && "kr"

  const redirectHandler = () => {
    router.push(checkoutUrl);
  };
  return (
    <div className="flex flex-col items-end pt-10">
      <h3 className="uppercase tracking-wider">
        Totalt: {cartCost?.amount}{" "}{sek}
        
      </h3>
      <Button
        onClick={redirectHandler}
        className="w-[200px] mt-4 rounded-none tracking-widest font-light uppercase"
      >
        Till Kassan
      </Button>
    </div>
  );
}
