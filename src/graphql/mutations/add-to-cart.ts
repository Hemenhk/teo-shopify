import { client } from "@/shopify-client";

const addLineItemToCartMutation = `
mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        totalQuantity
        checkoutUrl
        cost {
        totalAmount {
          amount
          currencyCode
        }
        }
      } 
      userErrors {
        field
        message
      }
    }
  }
`;

export const addLineItemToCart = async (
  cartId: string,
  merchandiseId: string,
  quantity: number
) => {
  try {
    const res = await client.request<{
      cartLinesAdd: { cart: any, userErrors: any };
    }>(addLineItemToCartMutation, {
      variables: {
        cartId: cartId,
        lines: [
          {
            merchandiseId: merchandiseId,
            quantity: quantity,
          },
        ],
      },
    });
    console.log("add to cart", res); 
    return res?.data?.cartLinesAdd.cart; // Return only the cart data
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error; // Rethrow the error so it can be caught where the function is called
  }
};
