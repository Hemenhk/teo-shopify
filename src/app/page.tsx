import TheFeaturedCollection from "@/components/featured-collection/TheFeaturedCollection";
import { getShopInfo } from "@/graphql/queries/shop-query";

export default async function Home() {
  const res = await getShopInfo();
  const homeImage = res?.data.shop.brand.coverImage.image;
  console.log("home image", homeImage);

  return (
    <main className="flex h-full flex-col items-center justify-between">
        <img className="h-[80vh] w-screen" src={homeImage.url} alt={homeImage.altText || "cover image"} />
      <div className="py-16">

      <TheFeaturedCollection />
      </div>
    </main>
  );
}
