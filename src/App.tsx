import "./App.css";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="grid grid-cols-2 bg-primary">
      <div className="col-span-full">
        <NavBar />
      </div>
      <div className="bg-orange-500 hidden md:block">aside</div>
      <div className="bg-lime-500 col-span-full md:col-auto">
        <GameGrid/>
      </div>
    </div>
  );
}

export default App;
