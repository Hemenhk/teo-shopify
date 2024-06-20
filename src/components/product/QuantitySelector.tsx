import React from "react";
import { Minus, Plus } from "lucide-react";

type QuantityType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function QuantitySelector({ count, setCount }: QuantityType) {
  const minusHandler = async () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
    }
  };

  const plusHandler = async () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div className="flex flex-col items-center xl:items-start gap-3 pt-6">
      <p className="text-sm">Kvantitet:</p>
      <div className="flex items-center justify-between gap-4 border border-[#dbdbdb] rounded px-[20px] py-[6px]  w-[125px]">
        <Minus onClick={minusHandler} size={15} cursor={"pointer"} />
        <p>{count}</p>
        <Plus onClick={plusHandler} size={15} cursor={"pointer"} />
      </div>
    </div>
  );
}
