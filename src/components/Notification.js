import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Notification() {
  const theme = useTheme();
  return (
    <Link to="/notifications">
      <div className={"notification " + theme}></div>
    </Link>
  );
}

export default Notification;
