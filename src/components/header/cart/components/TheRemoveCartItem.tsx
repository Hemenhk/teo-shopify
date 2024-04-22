"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { removeLineItem } from "@/graphql/mutations/remove-lineItem";

export default function TheRemoveCartItem({
  lineItemId,
}: {
  lineItemId: string;
}) {
  const checkoutId = localStorage.getItem("checkout_id") || "";

  const { mutateAsync: removeLineItemMutation } = useMutation({
    mutationKey: ["cartItem"],
    mutationFn: () => removeLineItem(checkoutId, lineItemId),
  });

  const removeLineItemHandler = () => {
    removeLineItemMutation();
    console.log("line item removed");
  };
  return (
    <Button onClick={removeLineItemHandler}>
      <Trash2 size={20} />
    </Button>
  );
}
