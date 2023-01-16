import API from "../api/axios";

// export const getTestData = (): Promise<any> => {
//   return new Promise((resolve, reject) => {
//     API.get("api/v1/products.json?brand=maybelline")
//       .then((res) => {
//         if (res?.data) {
//           return resolve(res.data);
//         }
//       })
//       .catch((err) => {
//         return reject(err);
//       });
//   });
// };

export const getTestData = async (): Promise<any | null> => {
  let res = await API.get("api/v1/products.json?brand=maybelline");
  if (res?.data) {
    return res.data;
  }
};
export const getTestDetailData = async (id: string): Promise<any | null> => {
  let res = await API.get(`api/v1/products/${id}.json`);
  if (res?.data) {
    return res.data;
  }
};
