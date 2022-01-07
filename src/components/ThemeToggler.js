import { useTheme, useThemeToggle } from "../context/ThemeContext";

function ThemeToggler() {
  const theme = useTheme();
  const changeTheme = useThemeToggle();
  return (
    <div>
      <button onClick={changeTheme} className={"theme-toggle-btn " + theme}>
        Change Theme
      </button>
    </div>
  );
}

export default ThemeToggler;
