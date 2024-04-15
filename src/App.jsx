// import Movies from "./components/Movies";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Shows from "./pages/Shows";
import Sports from "./pages/Sports";
import BeAChiller from "./pages/BeAChiller";
// import Movies from "./components/Movies";

function App() {
  const currentPath = window.location.pathname;

  return (
    <>
      {currentPath !== '/be-a-chiller' && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Movies />} /> */}
        <Route path="/series" element={<Series />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/be-a-chiller" element={<BeAChiller />} />
      </Routes>
    </>
  )
}

export default App
