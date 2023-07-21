import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGeneres";
import GameCard from "./GameCard";

import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
  const { data: games, error, isLoading } = useGames(selectedGenre);

  return (
    <>
      <h1>{error && error}</h1>
      <h1 className="text-4xl font-bold">Games</h1>
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
