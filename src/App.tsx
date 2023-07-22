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

function App() {
  return (
    <div className=" dark:bg-primary dark:text-white min-h-screen grid lg:grid-cols-[200px_1fr] gap-1 grid-rows-[auto_1fr]">
      <div className="col-span-full shadow mb-3 p-2">
        <NavBar />
      </div>
      <div className="hidden lg:block p-4">
        <GenreList />
      </div>
      <div className=" dark:shadow-white p-4">
        <div className="flex gap-2 flex-col">
          <GameHeading />

          <div className="flex gap-4">
            <PlatformSelector />
            <SortSelector />
          </div>
        </div>
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
