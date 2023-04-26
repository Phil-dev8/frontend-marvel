import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// COMPONENTS IMPORT
import Header from "./components/Header";
import Footer from "./components/Footer";
//PAGES IMPORT
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import CharacterComics from "./pages/CharacterComics";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { useState } from "react";
import { LOGIN, AuthModal } from "./components/AuthModal";
library.add(faStar);

function App() {
  const [typeModal, setTypeModal] = useState(LOGIN);
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [permission, setPermission] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const onChangeTypeModal = (value) => setTypeModal(value);
  const onChangePermission = (value) => setPermission(value);
  const onCloseAuthModal = () => setAuthModalVisible(false);
  const onOpenAuthModal = () => setAuthModalVisible(true);

  return (
    <div className="App">
      <Router>
        <Header permission={permission} onOpenAuthModal={onOpenAuthModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics/" element={<Comics />} />
          <Route path="/comics/:characterId" element={<CharacterComics />} />
          <Route path="/favourites" element={<Favorites />} />
        </Routes>
        <Footer />
        {authModalVisible && (
          <AuthModal
            onChangeTypeModal={onChangeTypeModal}
            onChangePermission={onChangePermission}
            onCloseModal={onCloseAuthModal}
            typeModal={typeModal}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
