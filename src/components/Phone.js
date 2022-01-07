import { useTheme } from "../context/ThemeContext";
import Notification from "./Notification";
import Timer from "./Timer";

function Phone() {
  const theme = useTheme();
  return (
    <div className={"phone " + theme}>
      <Timer />
      <Notification />
      <Notification />
    </div>
  );
}

export default Phone;

// const styles = {
//   phone: {
//     margin: "20px auto",
//     width: "300px",
//     height: "500px",
//     textAlign: "center",
//     backgroundColor: theme === "light-theme" ? "#fff" : "#000",
//     color: theme === "light-theme" ? "#000" : "#fff",
//     borderRadius: "15px",
//     paddingTop: "40px",
//   },
// };
