import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGeneres";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <div className=" dark:bg-primary dark:text-white min-h-screen grid lg:grid-cols-[200px_1fr] gap-1 grid-rows-[auto_1fr]">
      <div className="col-span-full shadow mb-3">
        <NavBar />
      </div>
      <div className="hidden lg:block p-4">
        <GenreList onSelectGenre={setSelectedGenre} />
      </div>
      <div className=" dark:shadow-white p-4">
        <GameGrid selectedGenre={selectedGenre} />
      </div>
    </div>
  );
}

export default App;
