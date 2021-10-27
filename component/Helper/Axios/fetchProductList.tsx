import axiosClient from "./AxiosClient";
import { DataType } from "../../Type/ProductType";
import { Advertise } from "../../Type/Advertise";
import { User } from "../../Type/User";
import axios from "axios";
export const getData = {
  getProducts: async () => {
    const url = "/ProductList";
    const res: DataType[] = await axiosClient.get(url);
    return res;
  },
  getProductById: async (id) => {
    const url = "/ProductList/" + id;
    const res: DataType = await axiosClient.get(url);
    return res;
  },
  getAdvertisement: async () => {
    const url = "/Advertises";
    const res: Advertise[] = await axiosClient.get(url);
    return res;
  },
  registerAuth: async (data) => {
    const url = "/auth/signup";
    const res: any = await axiosClient.post(url, data);
    return res;
  },
  Login: async (params) => {
    const url = "/auth/SignIn";
    const res: User = await axiosClient.post(url, params);
    return res;
  },
  Setcomment: async (params) => {
    const { _id } = params;
    const url = `/ProductList/Comment/${_id}`;
    const res: any[] = await axiosClient.post(url, params);
    return res;
  },
  get4D: async () => {
    const url = "/ProductList/Collection4D";
    const res: DataType[] = await axiosClient.get(url);
    return res;
  },
  get4Ddetail: async (id) => {
    const url = `/ProductList/Collection4D/${id}`;
    const res = await axiosClient.get(url);
    return res;
  },
  // post4D: async (data) => {
  //   const url = "/ProductList/4D";
  //   const res = await axios.post(url, data);
  //   return res;
  // },
};
