import axios from "axios";

const URL = (process.env.BACKEND as string) || "http://localhost:3001";

export const AxiosInstance = axios.create({
  baseURL: URL + "/api",
});
