import axios from "axios";

export const getAdminValues = async () => {
  try {
    const res = await axios.get("/api/adminValues");
    console.log("adminvalues", res);
    return res.data.dashboardValues[0];
  } catch (error) {
    console.log(error);
  }
};

export const updateAdminValues = async (data: any) => {
  try {
    const res = await axios.patch("/api/adminValues", data);
    console.log("updating admin values", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updatePasswords = async (data: any) => {
  try {
    const res = await axios.patch("/api/auth/change-password", data);
    console.log("updating password values", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postContactForm = async (data: any) => {
  try {
    const res = await axios.post("/api/contactValues", data);
    return res;
  } catch (error) {
    error;
  }
};
