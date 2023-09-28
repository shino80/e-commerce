import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN = () => {
  if (
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser.accessToken
  ) {
    return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser.accessToken;
  } else {
    return "";
  }
};

export const publicReq = axios.create({
  baseURL: BASE_URL,
});
export const userReq = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
