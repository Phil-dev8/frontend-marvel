import logo from "../assets/img/Marvel_Logo.svg.png";
import { Link } from "react-router-dom";

const Header = ({ onOpenAuthModal, permission }) => {
  return (
    <div>
      <div className="container-header">
        <header>
          <Link to="/">
            <img src={logo} alt="logo de la marque" />
          </Link>
        </header>

        <div className="button-sign-in">
          {!permission ? (
            <button onClick={onOpenAuthModal}>Connexion</button>
          ) : (
            <p style={{ color: "white" }}>{permission.username}</p>
          )}
        </div>
      </div>

      <menu>
        <Link className="link" to="/characters">
          <h2>Personnages</h2>
        </Link>
        <Link className="link" to="/comics">
          <h2>Comics</h2>
        </Link>
        <Link className="link" to="/favourites">
          <h2>Favoris</h2>
        </Link>
      </menu>
    </div>
  );
};

export default Header;
