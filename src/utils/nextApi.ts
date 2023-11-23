import axios from "axios";

import config from "./config";

const nextApi = axios.create({
  baseURL: config.apiNextBaseUrl,
});
export default nextApi;
