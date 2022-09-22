import LoginPage from "./MainPage";
import Home from "./components/LoginPage/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/Login" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
