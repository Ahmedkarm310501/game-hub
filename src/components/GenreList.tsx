import React from "react";
import useGeneres from "../hooks/useGeneres";

const GenreList = () => {
  const { genres } = useGeneres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id} className="text-white">
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
