import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// COMPONENTS IMPORT
import Header from "./components/Header";
//ROUTES IMPORT
import Home from "./pages/Home";
import Comics from "./pages/Comics";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
