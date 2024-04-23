import { client } from "@/shopify-client";

const productQuery = `
query ShopQuery {
  shop {
    brand {
      logo {
        id
        image {
          altText
          id
          url(transform: {preferredContentType: PNG})
        }
      }
      coverImage {
        image {
          altText
          id
          url(transform: {preferredContentType: PNG})
        }
      }
    }
    paymentSettings {
      acceptedCardBrands
      countryCode
      currencyCode
    }
    privacyPolicy {
      body
      handle
      id
      title
      url
    }
    refundPolicy {
      body
      handle
      id
      title
      url
    }
    shippingPolicy {
      body
      handle
      id
      title
      url
    }
    subscriptionPolicy {
      body
      handle
      id
      title
      url
    }
    termsOfService {
      body
      handle
      id
      title
      url
    }
    name
    id
    primaryDomain {
      host
      url
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
