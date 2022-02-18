import Axios from "axios";
import configurations from "../config/config";

const { base_url, app } = configurations;

const connectService = () => {
  const connectTo = async (url: string) => {
    const res= await fetch(`${base_url}/${app["posts"]}`);
    const data  = await res.json();
    return await data;
  };
  return {
    connectTo,
  };
};

export default connectService;
