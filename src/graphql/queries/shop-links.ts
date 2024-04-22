import { client } from "@/shopify-client";

const shopLinks = `
query ShopLinks {
    collections(first: 10) {
      nodes {
        handle
        id
        title
      }
    }
  }
`;

export const getShopLinks = async () => {
  try {
    return await client.request(shopLinks);
  } catch (error) {
    console.log(error);
  }
};
