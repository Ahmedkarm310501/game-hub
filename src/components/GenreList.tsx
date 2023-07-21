import useGeneres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { Genre } from "../hooks/useGeneres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, isLoading } = useGeneres();

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Genres</h1>
      <ul>
        {isLoading &&
          Array.from({ length: 15 }).map((_, i) => <GenreSkeleton key={i} />)}

        {genres.map((genre) => (
          <GenreItem
            key={genre.id}
            genre={genre}
            onSelectGenre={onSelectGenre}
          />
        ))}
      </ul>
    </>
  );
};

const GenreItem = ({
  genre,
  onSelectGenre,
}: {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
}) => {
  const handleClick = () => {
    console.log(genre);
    onSelectGenre(genre);
  };
  return (
    <li className="flex px-2 py-1  items-center">
      <img
        src={getCroppedImageUrl(genre.image_background)}
        alt={genre.name}
        className="w-8 h-8 rounded-lg"
      />
      <span
        className="ml-2 hover:underline hover:cursor-pointer"
        onClick={handleClick}
      >
        {genre.name}
      </span>
    </li>
  );
};

export default GenreList;
