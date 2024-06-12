"use client";

import { Card, CardContent, CardFooter } from "../ui/card";
import { useQuery } from "@tanstack/react-query";
import { Perk, getPerks } from "@/axios/perks-req";
import { Plane, Earth, BadgePoundSterling, Sprout, Handshake } from "lucide-react";

const icons = [
  { icon: <Plane size={50}/>, value: "plane" },
  { icon: <Earth size={50}/>, value: "earth" },
  { icon: <BadgePoundSterling size={50}/>, value: "sterling" },
  { icon: <Sprout size={50}/>, value: "sprout" },
  { icon: <Handshake size={50}/>, value: "handshake" },
];

const stringToIcon = (value: string) => {
  return icons.find((icon) => icon.value === value)?.icon || null;
};

export default function ThePerks() {
  const {
    data: perkData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["perks"],
    queryFn: getPerks,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>No perks!</p>;
  }

  console.log("perks", perkData)

  const mappedPerks =
    perkData &&
    perkData.map((perk: Perk) => (
      <Card key={perk._id} className="border-0 shadow-none bg-transparent">
        <CardContent className="flex justify-center pt-4">
          {stringToIcon(perk.perkImg)}
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <h2 className="text-lg font-medium">{perk.perkTitle}</h2>
          <p className="w-3/4 text-center font-light pt-3">{perk.perkDescription}</p>
        </CardFooter>
      </Card>
    ));
  return (
    <div className="flex flex-wrap bg-slate-200 w-full justify-center items-center gap-3 py-10">
      {mappedPerks}
    </div>
  );
}
