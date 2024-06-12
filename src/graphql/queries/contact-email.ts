import { client } from "@/shopify-client";

const getContactEmailQuery = `
{
    shop {
      email
    }
  }
`;

export const getContactEmail = async () => {
  try {
    const res = await client.request(getContactEmailQuery);
    return res;
  } catch (error) {
    console.log(error);
  }
};
