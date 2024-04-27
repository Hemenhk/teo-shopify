import axios from "axios";

export type Perk = {
  _id: string;
  perkImg: string;
  perkTitle: string;
  perkDescription: string;
};

export type PerkList = {
  perkValue: Perk[];
};

export const getPerks = async () => {
  try {
    const res = await axios.get<PerkList>("/api/perks");
    console.log("getPerks", res);
    return res.data.perkValue;
  } catch (error) {
    console.log(error);
  }
};

export const createPerk = async (data: any) => {
  try {
    const res = await axios.post("/api/perks", data);
    console.log("perk res", res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
