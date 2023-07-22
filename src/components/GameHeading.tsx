import useGeneres from "../hooks/useGeneres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

export default function GameHeading() {
  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === platformId
  );
  const { data: genres } = useGeneres();
  const genre = genres?.results.find((genre) => genre.id === genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <h1 className="text-4xl font-bold">{heading}</h1>;
}
