import { client } from "@/shopify-client";

const CartCheckout = `
query CartCheckout($id: ID = "") {
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
        }
        id
        quantity
      }
    }
    totalQuantity
  }
}
`;

export const getCart = async (id: string) => {
  try {
    const res = await client.request(CartCheckout, {
      variables: { id },
    });
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
