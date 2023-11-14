import axios, { AxiosRequestConfig } from "axios";
import { useQuery, useMutation, UseQueryOptions } from "react-query";

const api = async (
  url: string,
  method: "get" | "post" | "put" | "delete" | "patch",
  config?: AxiosRequestConfig
) => {
  const res = await axios(url, { ...config, method });
  return await res.data;
};

const useAPI = (url: string) => {
  const useGet = (
    key: Array<string> | string,
    options?: Omit<
      UseQueryOptions<unknown, unknown, unknown, string | string[]>,
      "queryKey" | "queryFn"
    >
  ) => {
    return useQuery(
      key,
      (config: AxiosRequestConfig) => api(url, "get", config),
      options
    );
  };

  const usePost = useMutation((config: AxiosRequestConfig) =>
    api(url, "post", config)
  );

  const useDelete = useMutation((config: AxiosRequestConfig) =>
    api(url, "delete", config)
  );

  const usePut = useMutation((config: AxiosRequestConfig) =>
    api(url, "put", config)
  );

  const usePatch = useMutation((config: AxiosRequestConfig) =>
    api(url, "patch", config)
  );

  return { useGet, usePost, useDelete, usePut, usePatch };
};

export default useAPI;
