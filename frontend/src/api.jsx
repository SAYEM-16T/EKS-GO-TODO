// src/api.js
import axios from "axios";

export const authApi = axios.create({
  baseURL: "/api/v1/auth",
});


export function setAuthToken(token) {
  if (token) {
    authApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete authApi.defaults.headers.common["Authorization"];
  }
}
