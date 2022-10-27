import React from "react";
import MainPage from "./components/MainPage";
import IntroPage from "./components/IntroScreen";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Layout from "./components/Layout";


//import routes
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          
        </Route>
        <Route path="/IntroScreen" element={<IntroPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
