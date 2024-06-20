import { updateSingleReview } from "@/axios/review-req";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

type Props = {
  id: string;
  isVerified: boolean;
};

export default function TheVerifyReview({ id, isVerified }: Props) {
  const queryClient = useQueryClient();

  const { mutateAsync: verifyReviewMutation } = useMutation({
    mutationKey: ["reviews"],
    mutationFn: async () => {
      const verifyReview = !isVerified;
      await updateSingleReview(id, verifyReview);
      return verifyReview;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["reviews"] });
    },
  });

  const verifyReviewHandler = async () => {
    try {
      const res = await verifyReviewMutation();
      console.log("verify", res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button variant="ghost" onClick={verifyReviewHandler}>
      {isVerified ? "Overifiera" : "Verifiera"}
    </Button>
  );
}