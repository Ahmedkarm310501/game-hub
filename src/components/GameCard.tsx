import { Game } from "../hooks/useGames";
import PlatformiconList from "./PlatformiconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden">
      <img src={game.background_image} alt={game.name} />
      <div className="p-3">
        <h3 className="text-white text-2xl">{game.name}</h3>
        <PlatformiconList
          platform={game.parent_platforms.map((p) => p.platform)}
        />
      </div>
    </div>
  );
};

export default GameCard;
