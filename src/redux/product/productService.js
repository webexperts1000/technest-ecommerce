import axios from "axios";

const API = axios.create({
  baseURL: "https://tech-product-api.vercel.app/",
});

export const getProducts = () => API.get("/");
export const getProductById = (id) => API.get(`/${id}`);
export const getSearchProduct = (searchQuery) =>
  API.get(`/search?searchQuery=${searchQuery}`);
