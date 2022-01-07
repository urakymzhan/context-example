import React from "react";
import { useTheme } from "../context/ThemeContext";

function Layout({ children }) {
  const theme = useTheme();
  return <div className={"app " + theme}>{children}</div>;
}

export default Layout;
