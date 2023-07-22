import React from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";

import GameCard from "./GameCard";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

export default function GameGrid({ gameQuery }: Props) {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);

  if (error) return <h1>{error.message}</h1>;

  const fetchedGamesCount = games?.pages.reduce(
    (acc, page) => acc + page.results.length,
    0
  );

  const LoadingComponent = Array.from({ length: 10 }).map((_, i) => (
    <GameCardSkeleton key={i} />
  ));

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
          {LoadingComponent}
        </div>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
        {isLoading && LoadingComponent}

        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </InfiniteScroll>
  );
}
