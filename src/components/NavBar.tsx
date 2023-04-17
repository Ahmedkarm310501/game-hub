import logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    <div className="flex items-center">
      <img src={logo} className="w-16 h-16" />
      <h1 className="text-4xl">Nav bar</h1>
    </div>
  );
};

export default NavBar;
