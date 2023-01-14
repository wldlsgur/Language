import API from "../api/axios";

export const getTestData = async () => {
  let { data } = await API.get("api/v1/products.json?brand=maybelline");
  console.log("axios", data);
  return data;
};
