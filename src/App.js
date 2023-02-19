import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS IMPORT
import Header from "./components/Header";
import Footer from "./components/Footer";
//PAGES IMPORT
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import CharacterComics from "./pages/CharacterComics";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

// const [favoritesCharacters, setFavoritesCharacters] = useState();
// const [favoritesComics, setFavoritesComics] = useState();

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics/" element={<Comics />} />
        <Route path="/comics/:characterId" element={<CharacterComics />} />
        <Route path="/favourites" element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
