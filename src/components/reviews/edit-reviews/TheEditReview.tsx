import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SlOptionsVertical } from "react-icons/sl";

import { Button } from "@/components/ui/button";
import TheDeleteReview from "./TheDeleteReview";
import TheVerifyReview from "./TheVerifyReview";

type Props = {
  id: string;
  isVerified: boolean;
};

export default function TheEditReview({ id, isVerified }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="hover:bg-transparent">
          <SlOptionsVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 flex flex-col justify-center items-center">
        <DropdownMenuLabel>
          <DropdownMenuItem>
            <TheVerifyReview id={id} isVerified={isVerified} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <TheDeleteReview id={id} />
          </DropdownMenuItem>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}