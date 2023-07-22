import { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGeneres = () => useData<Genre>("/genres");
const useGeneres = () =>
  useQuery(["genres"], apiClient.getAll, {
    staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
  });

export default useGeneres;
