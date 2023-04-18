import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
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
        <div className="flex justify-between">
          <PlatformiconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
