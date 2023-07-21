import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export default function NavBar() {
  return (
    <nav>
      <div className="flex items-center justify-between ">
        <img src={logo} alt="logo" className="w-16" />
        <SearchInput />
        <ColorModeSwitch />
      </div>
    </nav>
  );
}
