"use client";

import { getCart } from "@/graphql/queries/cart-checkout";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { ShoppingBag } from "lucide-react";
import { createCart } from "@/graphql/mutations/create-cart";
import TheLoadingScreen from "@/components/homepage/TheLoadingScreen";

const CheckoutContext = createContext<any | undefined>(undefined);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [checkoutId, setCheckoutId] = useState<string | null>(null);

  useEffect(() => {
    const storedCheckoutId = localStorage.getItem("checkout_id");
    if (storedCheckoutId) {
      setCheckoutId(storedCheckoutId);
    }
  }, []);

  const {
    data: checkoutData,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => getCart(checkoutId),
    enabled: !!checkoutId,
  });

  const { mutateAsync: cartCreateMutation } = useMutation({
    mutationKey: ["cart"],
    mutationFn: createCart,
  });

  useEffect(() => {
    const setCart = async () => {
      try {
        if (!checkoutId || checkoutData?.data.cart === null) {
          const cart = await cartCreateMutation();
          localStorage.setItem("checkout_id", cart.id);
          setCheckoutId(cart.id);
          setTimeout(() => {
            refetch();
          }, 2000);
          // refetch the cart data after setting the new checkout ID
        }
      } catch (error) {
        console.error("Error creating cart:", error);
      }
    };
    if (!checkoutId) {
      setCart();
    }
  }, [checkoutId, checkoutData, cartCreateMutation, refetch]);

  if (checkoutId === null) {
    return <TheLoadingScreen />;
  }

  if (!checkoutId) {
    return <div>No checkout ID found.</div>;
  }

  if (isLoading) {
    return <TheLoadingScreen />;
  }

  if (isError || !checkoutData?.data) {
    return <div>Error fetching cart data.</div>;
  }

  if (isError) {
    return <ShoppingBag />;
  }

  const cart = checkoutData?.data?.cart;
  console.log("CART", cart);

  return (
    <CheckoutContext.Provider value={{ cart }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }

  return context;
};
