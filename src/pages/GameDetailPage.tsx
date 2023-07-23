import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import Spinner from "../components/Spinner";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner size="lg" />;
  if (error || !game) throw error;

  return (
    <div className="col-span-full p-4">
      <h1 className="font-bold mb-4 text-3xl">{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </div>
  );
}

export default GameDetailPage;
