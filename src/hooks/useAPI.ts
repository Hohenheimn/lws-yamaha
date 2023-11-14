import axios, { AxiosRequestConfig } from "axios";
import { useQuery, useMutation } from "react-query";

const useAPI = (url: string) => {
  const get = useQuery(url, async (config?: AxiosRequestConfig) => {
    const res = await axios.get(url, config);
    return await res.data;
  });

  const post = useMutation(async (config: AxiosRequestConfig) => {
    const res = await axios.post(url, config);
    return await res.data;
  });

  const remove = useMutation(async (config: AxiosRequestConfig) => {
    const res = await axios.delete(url, config);
    return await res.data;
  });

  const put = useMutation(async (config: AxiosRequestConfig) => {
    const res = await axios.put(url, config);
    return await res.data;
  });

  return { get, post, remove, put };
};

export default useAPI;
