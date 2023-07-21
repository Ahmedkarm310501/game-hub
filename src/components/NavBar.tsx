import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchTerm: string) => void;
}
export default function NavBar({ onSearch }: Props) {
  return (
    <nav>
      <div className="flex items-center justify-between ">
        <img src={logo} alt="logo" className="w-16" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </div>
    </nav>
  );
}
