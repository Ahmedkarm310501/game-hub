import useGeneres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { Genre } from "../hooks/useGeneres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data: genres, isLoading } = useGeneres();

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Genres</h1>
      <ul>
        {isLoading &&
          Array.from({ length: 15 }).map((_, i) => <GenreSkeleton key={i} />)}

        {genres?.results.map((genre) => (
          <GenreItem
            key={genre.id}
            genre={genre}
            onSelectGenre={onSelectGenre}
            selectedGenreId={selectedGenreId}
          />
        ))}
      </ul>
    </>
  );
};

const GenreItem = ({
  genre,
  onSelectGenre,
  selectedGenreId,
}: {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}) => {
  const handleClick = () => {
    onSelectGenre(genre);
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
