import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 m-4">
        {isLoading &&
          skeletons.map((_, index) => <GameCardSkeleton key={index} />)}
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
