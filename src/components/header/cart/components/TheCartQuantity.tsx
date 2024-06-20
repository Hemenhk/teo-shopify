import { useCheckout } from "@/context/checkoutContext";
import { updateLineItem } from "@/graphql/mutations/update-lineItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function TheCartQuantity({ cart }: { cart: any }) {
  const queryClient = useQueryClient();
  const { quantity, merchandise, id } = cart;
  const { cart: checkout } = useCheckout();
  const checkoutId = checkout.id;

  const [count, setCount] = useState(quantity || 1);

  const { mutateAsync: updateLineItemMutation } = useMutation({
    mutationKey: ["cartItems"],
    mutationFn: () => updateLineItem(checkoutId, id, merchandise.id, count),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["cartItems"] });
    },
  });

  const minusHandler = async () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      await updateLineItemMutation();
    }
  };

  const plusHandler = async () => {
    const newCount = count + 1;
    setCount(newCount);
    await updateLineItemMutation();
  };

  return (
    <div className="flex flex-col gap-1.5 pt-6">
      <p className="text-xs">Kvantitet:</p>
      <div className="flex items-center justify-between gap-4 border border-[#dbdbdb] rounded px-[20px] py-[6px]  w-[100px]">
        <Minus onClick={minusHandler} size={15} cursor={"pointer"} />
        <p>{quantity}</p>
        <Plus onClick={plusHandler} size={15} cursor={"pointer"} />
      </div>
    </div>
  );
}
