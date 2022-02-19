import axios from "axios";
import configurations from "../config/config";
import Post from "./Post";

interface Connect {
  connectTo?: any;
}

const { base_url, app } = configurations;

const connectService = () => {
  const fetchTo = async (url: string) => {
    const param = app[`${url}`];
    const res = await fetch(`${base_url}/${param}`);
    const data = await res.json();
    return await data;
  };

  const axiosTo = async (url: string) => {
    const resource = `${base_url}/${app[url]}`;
    const res = await axios.get(resource);
    return await res.data;
  };

  return {
    fetchTo,
    axiosTo,
  };
};

export default connectService;
