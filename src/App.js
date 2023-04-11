import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// COMPONENTS IMPORT
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalLogin from "./components/ModalLogin";
import ModalSignup from "./components/ModalSignup";
//PAGES IMPORT
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import CharacterComics from "./pages/CharacterComics";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { useState } from "react";
library.add(faStar);

function App() {
  const [loginVisible, setloginVisible] = useState(false);
  const [signupVisible, setsignupVisible] = useState(false);
  const [permission, setPermission] = useState(
    localStorage.getItem("marvel")
      ? JSON.parse(localStorage.getItem("marvel"))
      : null
  );

  return (
    <div className="App">
      <Router>
        <Header
          loginVisible={loginVisible}
          setloginVisible={setloginVisible}
          permission={permission}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics/" element={<Comics />} />
          <Route path="/comics/:characterId" element={<CharacterComics />} />
          <Route path="/favourites" element={<Favorites />} />
        </Routes>
        <Footer />
        {loginVisible ? (
          <ModalLogin
            setloginVisible={setloginVisible}
            setsignupVisible={setsignupVisible}
            setPermission={setPermission}
          />
        ) : null}
        {signupVisible ? (
          <ModalSignup
            setsignupVisible={setsignupVisible}
            setloginVisible={setloginVisible}
            setPermission={setPermission}
          />
        ) : null}
      </Router>
    </div>
  );
}

export default App;
