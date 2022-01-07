import "./App.css";
import ThemeProvider from "./context/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NotificationDetails from "./components/NotificationDetails";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/notifications" element={<NotificationDetails />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
export default App;
