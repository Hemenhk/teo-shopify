"use client";

import { createCart } from "@/graphql/mutations/create-cart";
import { getCart } from "@/graphql/queries/cart-checkout";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, ReactNode, useEffect } from "react";

const CartContext = createContext<any | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { mutateAsync: cartCreateMutation } = useMutation({
    mutationKey: ["cart"],
    mutationFn: createCart,
  });

  const checkoutId = localStorage.getItem("checkout_id");
  useEffect(() => {
    const initializeCart = async () => {
      const checkoutId = localStorage.getItem("checkout_id");
      if (!checkoutId) {
        try {
          const cart = await cartCreateMutation();
          localStorage.setItem("checkout_id", cart.id);
        } catch (error) {
          console.error("Error creating cart:", error);
        }
      }
    };

    initializeCart();
  }, [cartCreateMutation, checkoutId]);

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
