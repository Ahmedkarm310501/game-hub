import { GameQuery } from "../App";
import useGeneres from "../hooks/useGeneres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const { data: genres } = useGeneres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <h1 className="text-4xl font-bold">{heading}</h1>;
}
