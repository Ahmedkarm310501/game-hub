import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import Spinner from "../components/Spinner";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner size="lg" />;
  if (error || !game) throw error;

  return (
    <div className="col-span-full">
      <h1>{game.name}</h1>
      <p>{game.description_raw}</p>
    </div>
  );
}

export default GameDetailPage;
