"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeLineItem } from "@/graphql/mutations/remove-lineItem";

export default function TheRemoveCartItem({
  lineItemId,
}: {
  lineItemId: string;
}) {
  const checkoutId = localStorage.getItem("checkout_id") || "";
  const queryClient = useQueryClient();

  const { mutateAsync: removeLineItemMutation } = useMutation({
    mutationKey: ["cartItems"],
    mutationFn: () => removeLineItem(checkoutId, lineItemId),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["cartItems"] });
    },
  });

  const removeLineItemHandler = () => {
    removeLineItemMutation();
    console.log("line item removed");
  };
  return (
    <Button onClick={removeLineItemHandler} className="bg-transparent hover:bg-transparent text-black">
      <Trash2 size={20} />
    </Button>
  );
}
