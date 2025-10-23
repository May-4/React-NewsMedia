import "./App.css";
import NavBar from "./components/navbar";
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
