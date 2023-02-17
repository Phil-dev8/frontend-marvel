import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS IMPORT
import Header from "./components/Header";
//ROUTES IMPORT
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import CharacterComics from "./pages/CharacterComics";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics/" element={<Comics />} />
        <Route path="/comics/:characterId" element={<CharacterComics />} />
      </Routes>
    </Router>
  );
}

export default App;
