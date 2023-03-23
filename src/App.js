import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// COMPONENTS IMPORT
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
//PAGES IMPORT
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import CharacterComics from "./pages/CharacterComics";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { useState } from "react";
library.add(faStar);

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header visible={visible} setVisible={setVisible} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics/" element={<Comics />} />
          <Route path="/comics/:characterId" element={<CharacterComics />} />
          <Route path="/favourites" element={<Favorites />} />
        </Routes>
        <Footer />
        {visible && <Modal setVisible={setVisible} />}
      </Router>
    </div>
  );
}

export default App;
