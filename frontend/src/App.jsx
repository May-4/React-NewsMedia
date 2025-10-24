import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";

function App() {
   const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* ------For Nested Child Component----- */}
      {<Outlet context={{ searchTerm }} />}
    </>
  );
}

export default App;
