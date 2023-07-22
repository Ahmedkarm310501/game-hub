import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGeneres";
import { useState } from "react";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: { id: string; name: string; value: string } | null;
  searchText: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <div className=" dark:bg-primary dark:text-white min-h-screen grid lg:grid-cols-[200px_1fr] gap-1 grid-rows-[auto_1fr]">
      <div className="col-span-full shadow mb-3 p-2">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </div>
      <div className="hidden lg:block p-4">
        <GenreList
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
          selectedGenreId={gameQuery.genreId}
        />
      </div>
      <div className=" dark:shadow-white p-4">
        <div className="flex gap-2 flex-col">
          <GameHeading gameQuery={gameQuery} />

          <div className="flex gap-4">
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              onSelectSort={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </div>
        </div>
        <GameGrid gameQuery={gameQuery} />
      </div>
    </div>
  );
}

export default App;
