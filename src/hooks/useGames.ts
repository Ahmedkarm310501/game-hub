import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder?.value,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>(["games", gameQuery], () =>
    apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder?.value,
        search: gameQuery.searchText,
      },
    })
  );

export default useGames;
