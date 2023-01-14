import axios from "axios";

const API = axios.create({
  baseURL: "http://makeup-api.herokuapp.com/",
  headers: {
    "Content-Type": "apllication/json",
  },
});
export default API;
