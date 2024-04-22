import { client } from "@/shopify-client";
import axios from "axios";

const productQuery = `
query getShopDetails{
    shop {
      name
      primaryDomain{
        host
        url
      }
      paymentSettings{
        currencyCode
        acceptedCardBrands
        enabledPresentmentCurrencies
      }
    }
  }
`;

export const getShopInfo = async () => {
  try {
    const res = await client.request(productQuery);
    return res;
  } catch (error) {
    console.log(error);
  }
};
