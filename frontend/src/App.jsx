import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/navbar";
import { BlogForm } from "./screens/BlogForm";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      {/* ------For Nested Child Component----- */}
      {<Outlet />}
    </>
  );
}

export default App;
