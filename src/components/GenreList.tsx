import useGeneres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { Genre } from "../entities/Genre";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data: genres, isLoading } = useGeneres();

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Genres</h1>
      <ul>
        {isLoading &&
          Array.from({ length: 15 }).map((_, i) => <GenreSkeleton key={i} />)}

        {genres?.results.map((genre) => (
          <GenreItem key={genre.id} genre={genre} />
        ))}
      </ul>
    </>
  );
};

const GenreItem = ({ genre }: { genre: Genre }) => {
  const onSelectGenre = useGameQueryStore((state) => state.setGenreId);
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);

  const handleClick = () => {
    onSelectGenre(genre.id);
  };
  return (
    <li className="flex px-2 py-1  items-center">
      <img
        src={getCroppedImageUrl(genre.image_background)}
        alt={genre.name}
        className="w-8 h-8 rounded-lg object-cover"
      />
      <span
        className={`ml-2 hover:underline hover:cursor-pointer ${
          genre.id === selectedGenreId && "underline font-bold"
        }`}
        onClick={handleClick}
      >
        {genre.name}
      </span>
    </li>
  );
};

export default GenreList;
