"use client";

import { createCart } from "@/graphql/mutations/create-cart";
import { useMutation } from "@tanstack/react-query";
import React, { createContext, useContext, ReactNode, useEffect } from "react";

const CartContext = createContext<any | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { mutateAsync: cartCreateMutation } = useMutation({
    mutationKey: ["cart"],
    mutationFn: createCart,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if checkout_id exists in localStorage
        const checkoutId = localStorage.getItem("checkout_id");
        if (checkoutId) {
          console.log("Using existing checkout_id:", checkoutId);
          return; // Exit the function if checkout_id exists
        }

        // If checkout_id doesn't exist, create a new cart
        const cart = await cartCreateMutation();
        console.log("Cart data:", cart);
        localStorage.setItem("checkout_id", cart.id);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [cartCreateMutation]);

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
