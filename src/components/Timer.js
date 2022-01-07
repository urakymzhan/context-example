import { useTheme } from "../context/ThemeContext";

// TODO: implement time
function Timer() {
  const theme = useTheme();
  return (
    <div className={"timer " + theme}>
      <h1 className={"clock " + theme}>8:20</h1>
    </div>
  );
}

export default Timer;
