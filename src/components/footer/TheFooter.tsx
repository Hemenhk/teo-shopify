"use client";

import { useAdminValues, useShopQuery } from "@/hooks/useQueryHooks";
import TheFooterMenu from "./components/TheFooterMenu";

export default function TheFooter() {
  const { data: shopData } = useShopQuery();
  const { data: footerData } = useAdminValues();
  return (
    <footer
      className="h-80 text-gray-200"
      style={{ backgroundColor: footerData?.footerBackgroundColor }}
    >
      <div className="flex flex-row pl-5 pt-14 gap-8 h-3/4">
        <div>
          <h2>{shopData?.data.shop.name}</h2>
        </div>
        <div>
          <TheFooterMenu />
        </div>
      </div>
      <div className="flex items-center justify-between px-5  w-full h-1/4 border-t">
        <div className="flex flex-row gap-5">
          <p className="font-light tracking-wide">
            © 2024 {shopData?.data.shop.name} All rights reserved
          </p>
          |<p className="font-light tracking-wide"> Designed in Sweden</p>
        </div>
        <div>
          <p className="font-light tracking-wide">Crafted by Hemen</p>
        </div>
      </div>
    </footer>
  );
}
