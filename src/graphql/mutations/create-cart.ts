import { client } from "@/shopify-client";

const createCartMutation = `
mutation cartCreate {
    cartCreate {
      cart {
        id
        checkoutUrl
        totalQuantity
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

export const createCart = async () => {
    try {
      const res = await client.request<{ cartCreate: { cart: any; userErrors: any[] } }>(createCartMutation);
      console.log("create cart", res); // This logs the entire response
      return res?.data?.cartCreate.cart; // Return only the cart data
    } catch (error) {
      console.error("Error creating cart:", error);
      throw error; // Rethrow the error so it can be caught where the function is called
    }
  };
