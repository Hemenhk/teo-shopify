import { client } from "@/shopify-client";

const updateLineItemMutation = `
mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
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

export const updateLineItem = async (
  cartId: string,
  id: string,
  merchandiseId: string,
  quantity: number
) => {
  try {
    const res = await client.request<{
      cartLinesUpdate: { cart: Cart; userErrors: UserError[] };
    }>(updateLineItemMutation, {
      variables: {
        cartId: cartId,
        lines: [{ id, merchandiseId, quantity }],
      },
    });
    console.log("add to cart", res);
    return res?.data?.cartLinesUpdate.cart; // Return only the cart data
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error; // Rethrow the error so it can be caught where the function is called
  }
};
