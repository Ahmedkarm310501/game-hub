import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformiconList from "./PlatformiconList";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-secondaryLight shadow-slate-100 dark:bg-secondary  rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <img
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        className="max-w-full "
      />
      <Link to={`/games/${game.slug}`}>
        <div className="p-3">
          <div className="flex justify-between mb-2">
            <PlatformiconList
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </div>
          <h3 className="text-2xl">{game.name}</h3>
          <Emoji rating={game.rating_top} />
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
