"use client";

import { getCart } from "@/graphql/queries/cart-checkout";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, createContext, useContext } from "react";

import { ShoppingBag } from "lucide-react";

const CheckoutContext = createContext<any | undefined>(undefined);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const checkoutId = (localStorage.getItem("checkout_id") as string) || "";
  const {
    data: checkoutData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => getCart(checkoutId),
  });

  if (!checkoutId) {
    return <div>No checkout ID found.</div>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !checkoutData?.data) {
    return <div>Error fetching cart data.</div>;
  }

  if (isError) {
    return <ShoppingBag />;
  }

  const cart = checkoutData?.data?.cart;
  console.log("CART", cart)

  return (
    <CheckoutContext.Provider value={{cart}}>{children}</CheckoutContext.Provider>
  );
}

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }

  return context;
};
