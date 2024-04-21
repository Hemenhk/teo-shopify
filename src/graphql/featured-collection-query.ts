import { client } from "@/shopify-client";


const featuredCollection = `
query FeaturedCollection {
  collection(id: "gid://shopify/Collection/619038310724") {
    id
    title
    products(first: 4) {
      nodes {
        featuredImage {
          altText
          transformedSrc(preferredContentType: PNG)
        }
        handle
        vendor
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        id
        title
      }
    }
  }
}

`;

export const getFeaturedCollection = async () => {
    try {
      const res = await client.request(featuredCollection);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  