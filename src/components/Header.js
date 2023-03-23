import logo from "../assets/img/Marvel_Logo.svg.png";
import { Link } from "react-router-dom";

const Header = ({ visible, setVisible }) => {
  return (
    <div>
      <div className="container-header">
        <header>
          <Link to="/">
            <img src={logo} alt="logo de la marque" />
          </Link>
        </header>

        <div className="header">
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            Connexion
          </button>
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
