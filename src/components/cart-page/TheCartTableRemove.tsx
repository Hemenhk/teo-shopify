import { removeLineItem } from "@/graphql/mutations/remove-lineItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";

export default function TheCartTableRemove({
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
    <Trash2 onClick={removeLineItemHandler} size={20} cursor={"pointer"} />
  );
}
