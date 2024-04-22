import { client } from "@/shopify-client";

const removeLineItemMutation = `
mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const removeLineItem = async (cartId: string, lineIds: string) => {
  try {
    const res = await client.request<{
      cartLinesRemove: { cart: Cart; userErrors: UserError[] };
    }>(removeLineItemMutation, {
      variables: {
        cartId: cartId,
        lineIds: [lineIds],
      },
    });
    console.log("add to cart", res);
    return res?.data?.cartLinesRemove.cart; // Return only the cart data
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error; // Rethrow the error so it can be caught where the function is called
  }
};
