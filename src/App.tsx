import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGeneres";
import { useState } from "react";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <div className=" dark:bg-primary dark:text-white min-h-screen grid lg:grid-cols-[200px_1fr] gap-1 grid-rows-[auto_1fr]">
      <div className="col-span-full shadow mb-3">
        <NavBar />
      </div>
      <div className="hidden lg:block p-4">
        <GenreList
          onSelectGenre={setSelectedGenre}
          selectedGenre={selectedGenre}
        />
      </div>
      <div className=" dark:shadow-white p-4">
        <PlatformSelector onSelectPlatform={setSelectedPlatform} />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </div>
    </div>
  );
}

export default App;
