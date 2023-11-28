import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPAge";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
