import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <nav>
      <div className="flex items-center justify-between ">
        <img src={logo} alt="logo" className="w-16" />
        <ColorModeSwitch />
      </div>
    </nav>
  );
}
