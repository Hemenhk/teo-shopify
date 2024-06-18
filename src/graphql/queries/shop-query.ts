import { client } from "@/shopify-client";

const videoQuery = `
{
  shop {
    name
    metafield(namespace: $namespace, key: $key) {
      id
      value
      namespace
    }
  }
}

`;

const ShopQuery = `
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
      supportedDigitalWallets
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

export const getVideoInfo = async (nameSpace: string, key: string) => {
  try {
    const res = await client.request(videoQuery, {
      variables: { nameSpace, key },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getShopInfo = async () => {
  try {
    const res = await client.request(ShopQuery);
    return res;
  } catch (error) {
    console.log(error);
  }
};
