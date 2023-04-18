import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <img src={logo} className="w-16 h-16" />
      <ColorModeSwitch />
    </div>
  );
};

export default NavBar;
