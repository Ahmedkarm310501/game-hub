import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <dl className="grid grid-cols-2 gap-4 mt-2">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map((p) => (
          <p key={p.platform.id}>{p.platform.name}</p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((g) => (
          <p key={g.id}>{g.name}</p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((p) => (
          <p key={p.id}>{p.name}</p>
        ))}
      </DefinitionItem>
    </dl>
  );
};

export default GameAttributes;
