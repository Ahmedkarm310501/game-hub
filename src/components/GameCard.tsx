import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden">
      <img src={game.background_image} alt={game.name} />
      <div className="p-3">
        <h3 className="text-white text-2xl">{game.name}</h3>
      </div>
    </div>
  );
};

export default GameCard;
