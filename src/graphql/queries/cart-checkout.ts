import { client } from "@/shopify-client";

const cartCheckout = `
query Cart($id: ID!) {
  cart(id: $id) {
    checkoutUrl
    cost {
      totalAmount {
        amount
        currencyCode
      }
    }
    id
    lines(first: 10) {
      nodes {
        cost {
          amountPerQuantity {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            price {
              amount
              currencyCode
            }
            selectedOptions {
            name
            value
            }
            sku
            unitPrice {
              amount
              currencyCode
            }
            image {
              altText
              transformedSrc(preferredContentType: PNG)
            }
            product {
              handle
              id
              title
              vendor
              featuredImage {
                transformedSrc(preferredContentType: PNG)
                id
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
}
`;

export const getCart = async (id: string) => {
  try {
    const res = await client.request(cartCheckout, {
      variables: { id },
    });
    console.log("getCart", res);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
