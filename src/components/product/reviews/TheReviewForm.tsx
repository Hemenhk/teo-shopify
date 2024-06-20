"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateReviewProps, postReview } from "@/axios/review-req";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ReviewForm({
  productHandle,
}: {
  productHandle: string;
}) {
  const queryClient = useQueryClient();
  const [reviewValues, setReviewValues] = useState<CreateReviewProps>({
    review: "",
    author: "",
    rating: 0,
    title: "",
    productHandle,
  });

  const { mutateAsync: createReviewMutation } = useMutation({
    mutationFn: async (data: CreateReviewProps) => {
      postReview(data);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["reviews"], data);
      queryClient.refetchQueries({ queryKey: ["reviews"] });
    },
  });

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReviewValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const ratingChangeHandler = (e, newValue) => {
    setReviewValues((prevState) => ({
      ...prevState,
      rating: newValue, 
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { rating, review, title, author, productHandle } = reviewValues;
      await createReviewMutation({
        rating,
        review,
        title,
        author,
        productHandle,
      });
      setReviewValues({
        rating: 0,
        title: "",
        review: "",
        author: "",
        productHandle,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-4 pt-6"
    >
      <Rating
        name="simple-controlled"
        value={reviewValues.rating}
        onChange={ratingChangeHandler}
      />
      <TextField
        id="outlined-basic"
        label="Titel"
        variant="outlined"
        name="title"
        value={reviewValues.title}
        onChange={changeHandler}
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Recension"
        variant="outlined"
        name="review"
        value={reviewValues.review}
        onChange={changeHandler}
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Författare"
        variant="outlined"
        name="author"
        value={reviewValues.author}
        onChange={changeHandler}
        size="small"
      />
      <Input
        type="hidden"
        value={reviewValues.productHandle}
        name="productHandle"
      />
      <Button type="submit">Lämna recension</Button>
    </form>
  );
}
