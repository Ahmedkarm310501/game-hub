import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGeneres = () =>
  useQuery(["genres"], apiClient.getAll, {
    staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
  });

export default useGeneres;
