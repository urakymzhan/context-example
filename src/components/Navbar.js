import ThemeToggler from "./ThemeToggler";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const theme = useTheme();
  return (
    <div className={"navbar " + theme}>
      <h1 className="navbar-header">Mobile Theme</h1>
      <ThemeToggler />
    </div>
  );
}

export default Navbar;
