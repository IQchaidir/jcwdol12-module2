/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import PropsPage from "./pages/props";
import NavbarComponent from "./components/navbar";
import { createContext, useState } from "react";
import ReduxState from "./pages/reduxState";
export const ThemeContext = createContext(null);
export const ThemeUpdateContext = createContext(null);

function App() {
  const [darkTheme, setDarkTheme] = useState(true); //ini global state
  //dark theme bisa dipakai di seluruh component yang ada di apps

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={setDarkTheme}>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/props" element={<PropsPage />} />
            <Route path="/redux" element={<ReduxState />} />
          </Routes>
        </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

//client side rendering = memanipulasi dom
//redux dan usecontext lebih simple useContext
// kapan pakai redux kapan pakai useContext?
