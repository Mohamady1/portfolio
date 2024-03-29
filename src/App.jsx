import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components//Home/Home";
import "./App.css";
import Contactme from "./components/Contact/Contactme";

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
