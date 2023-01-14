import Axios from "axios";

const API = Axios.create({
  baseURL: "http://makeup-api.herokuapp.com/",
  headers: {
    "Content-Type": "apllication/json",
  },
});
export default API;
