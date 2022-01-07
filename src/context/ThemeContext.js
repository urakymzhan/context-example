import { useState, createContext, useContext } from "react";

export const ThemeContext = createContext("light-theme");
export const ThemeToggleContext = createContext();

// custom hook
export function useTheme() {
  return useContext(ThemeContext);
}
// custom hook
export function useThemeToggle() {
  return useContext(ThemeToggleContext);
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light-theme");

  const changeTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggleContext.Provider value={changeTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
