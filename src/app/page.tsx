"use client";
import TheFeaturedCollection from "@/components/featured-collection/TheFeaturedCollection";
import TheHeroBanner from "@/components/homepage/TheHeroBanner";
import TheLoadingScreen from "@/components/homepage/TheLoadingScreen";
import { getVideoInfo } from "@/graphql/queries/shop-query";
import { useAdminValues, useShopQuery } from "@/hooks/useQueryHooks";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: shopData } = useShopQuery();
  const homeImage = shopData?.data.shop.brand.coverImage.image;
  console.log("home image", homeImage);

  const { isLoading } = useAdminValues();

  const { data: videoData } = useQuery({
    queryKey: ["video"],
    queryFn: () =>
      getVideoInfo("homepage_video.home_page_video", "Homepage video"),
  });

  console.log("video", videoData);

  return (
    <>
      {isLoading ? (
        <TheLoadingScreen />
      ) : (
        <main className="flex h-full flex-col items-center">
          <img
            className="h-[82vh] w-screen brightness-50 object-cover"
            src={homeImage?.url}
            alt={homeImage?.altText || "cover image"}
          />
          <TheHeroBanner />

          <TheFeaturedCollection />
        </main>
      )}
    </>
  );
}
