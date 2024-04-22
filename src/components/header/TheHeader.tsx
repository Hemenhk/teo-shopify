import React from "react";
import TheSideNav from "./side-nav/TheSideNav";
import TheCart from "./cart/TheCart";

export default function TheHeader() {
  return (
    <header className="flex justify-between items-center p-12 shadow-md">
     <TheSideNav />
      <h1>Logo</h1>
      <TheCart />
    </header>
  );
}
