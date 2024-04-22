"use client"
import TheFeaturedCollection from "@/components/featured-collection/TheFeaturedCollection";
import { useCart } from "@/context/cartContext";


export default function Home() {
  
  const {cart} = useCart()

  console.log("cart is fine ", cart)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TheFeaturedCollection />
    </main>
  );
}
