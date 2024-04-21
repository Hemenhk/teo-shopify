import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const client = createStorefrontApiClient({
  storeDomain: "http://tigerone.store",
  apiVersion: "2024-04",
  publicAccessToken: "26b04c379be2cf7a237ef383cbbfc6b5",
});
