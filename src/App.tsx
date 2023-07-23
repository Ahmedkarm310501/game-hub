import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

import { RouterProvider } from "react-router-dom";
import router from "./routes";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
