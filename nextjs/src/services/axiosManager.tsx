import API from "../api/axios";

export const getTestData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    API.get("api/v1/products.json?brand=maybelline")
      .then((res) => {
        if (res?.data) {
          return resolve(res.data);
        }
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
