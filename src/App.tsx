import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className=" bg-primary">
      <div className="">
        <NavBar />
      </div>
      <div className="flex">
        <div className=" hidden md:block md:w-1/5 ">
          <GenreList />
        </div>
        <div className=" w-full md:w-4/5 ">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
