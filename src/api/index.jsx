import { baseAPI, productAPI } from "../config/apiService";

export const api = {
  //API users
  getUsers: () => {
    return baseAPI.get(`/users`);
  },

  getUsersById: (id) => {
    return baseAPI.get(`/users/${id}`);
  },

  //API Biodata
  getBiodata: () => {
    return baseAPI.get(`/biodatas`);
  },
  getBiodataById: (id) => {
    return baseAPI.get(`/biodatas/${id}`);
  },
  createBiodata: (body) => {
    return baseAPI.post(`/biodatas`, body);
  },
  updateBiodata: (id, body) => {
    return baseAPI.put(`/biodatas/${id}`, body);
  },
  deleteBiodata: (id) => {
    return baseAPI.delete(`/biodatas/${id}`);
  },

  getProduct: () => {
    return productAPI.get(`/product`);
  },
  getProductById: (id) => {
    return productAPI.get(`/product/${id}`);
  },
  createProduct: (body) => {
    return productAPI.post(`/product`, body);
  },
  deleteProduct: (id) => {
    return productAPI.delete(`/product/${id}`);
  },
  updateProduct: (id, body) => {
    return productAPI.put(`/product/${id}`, body);
  },
};
