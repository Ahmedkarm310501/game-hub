import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 m-4">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
