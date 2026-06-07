import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "",
});

export const apiService = {
  get: api.get,
  post: api.post,
  put: api.put,
  delete: api.delete,
};
