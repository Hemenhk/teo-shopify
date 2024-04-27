import TheFeaturedCollection from "@/components/featured-collection/TheFeaturedCollection";
import ThePerks from "@/components/homepage/ThePerks";
import { getShopInfo } from "@/graphql/queries/shop-query";

export default async function Home() {
  const res = await getShopInfo();
  const homeImage = res?.data.shop.brand.coverImage.image;
  console.log("home image", homeImage);

  return (
    <main className="flex h-full flex-col items-center justify-between">
      <img
        className="h-[80vh] w-screen brightness-75"
        src={homeImage.url}
        alt={homeImage.altText || "cover image"}
      />
      <ThePerks />
      <div className="py-16">
        <TheFeaturedCollection />
      </div>
    </main>
  );
}
