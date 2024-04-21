import { client } from "@/shopify-client";

const productQuery = `
query MyQuery($handle: String = "") {
  productByHandle(handle: $handle) {
    
    description
    descriptionHtml
    images(first: 4) {
      nodes {
        altText
        id
        transformedSrc(preferredContentType: PNG)
      }
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    vendor
    title
  }
}
`;

export const getProductByHandle = async (handle: string) => {
  try {
    const res = await client.request(productQuery, {
      variables: { handle },
    });
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
