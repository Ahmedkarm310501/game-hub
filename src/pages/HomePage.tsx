import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

function HomePage() {
  return (
    <>
      <div className="hidden sm:block p-4">
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
    </>
  );
}

export default HomePage;
