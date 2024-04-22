import React from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector() {
  return (
    <div className="flex flex-col gap-3 pt-6">
      <p className="text-sm">Quantity:</p>
      <div className="flex items-center justify-between gap-4 border border-[#dbdbdb] rounded px-[20px] py-[6px]  w-[125px]">
        <Minus size={15} cursor={"pointer"} />
        <p>1</p>
        <Plus size={15} cursor={"pointer"} />
      </div>
    </div>
  );
}
