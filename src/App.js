import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/Signup" element={<SignupPage />}></Route>
      </Routes>
    </Router>
  );
}
