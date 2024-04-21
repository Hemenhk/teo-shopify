import React from "react";
import TheSideNav from "./side-nav/TheSideNav";

export default function TheHeader() {
  return (
    <header className="flex justify-between items-center p-12 shadow-md">
     <TheSideNav />
      <h1>Logo</h1>
      <h2>Cart</h2>
    </header>
  );
}
