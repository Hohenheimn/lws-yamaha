import axios from "axios";

const api = axios.create({
  baseURL: "https://yamaha-revamp-api.lws.codes",
});
export default api;
