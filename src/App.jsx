import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import "./App.css";
import Contactme from "./components/Contactme.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactme" element={<Contactme />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;