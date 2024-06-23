"use client";
import Image from "next/image";

export default function TheLoadingScreen() {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#fafafa]">
      <Image
        src="/studio-rex.png"
        alt="bg-logo"
        height={200}
        width={200}
        className="animate-logo-scale"
      />
    </div>
  );
}
