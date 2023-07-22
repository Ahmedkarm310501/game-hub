import { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery(["platforms"], apiClient.getAll, {
    staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
  });

export default usePlatforms;
