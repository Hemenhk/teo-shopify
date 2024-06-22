import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const client = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN,
  apiVersion: "2024-04",
  publicAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_PUBLIC_KEY,
});
