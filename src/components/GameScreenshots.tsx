import useScreenshots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {data?.results.map((screenshot) => (
        <img
          key={screenshot.id}
          src={screenshot.image}
          alt=""
          className="w-full h-auto"
        />
      ))}
    </div>
  );
};

export default GameScreenshots;
