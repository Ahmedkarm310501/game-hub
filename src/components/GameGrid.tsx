import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGeneres";
import { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";

import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

export default function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery);

  return (
    <>
      <h1>{error && error}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {isLoading &&
          Array.from({ length: 10 }).map((_, i) => (
            <GameCardSkeleton key={i} />
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
