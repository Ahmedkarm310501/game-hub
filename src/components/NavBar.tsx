import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <div className="flex items-center justify-between ">
        <Link to="/">
          <img src={logo} alt="logo" className="w-16" />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </div>
    </nav>
  );
}
