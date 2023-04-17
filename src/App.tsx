import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="grid grid-cols-2">
      <div className=" col-span-full">
        <NavBar />
      </div>
      <div className="bg-orange-500 hidden md:block">aside</div>
      <div className="bg-lime-500 col-span-full md:col-auto">main</div>
    </div>
  );
}

export default App;
