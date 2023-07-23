import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aaa61a5dc95148adaeabc0ce39018296",
  },
});
class APIClient<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);

  get = (id: number | string) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}

export default APIClient;
