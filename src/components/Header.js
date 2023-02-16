import logo from "../assets/img/Marvel_Logo.svg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} alt="logo de la marque" />
        </Link>
      </header>
      <menu>
        <Link to="/">
          <h2>Personnages</h2>
        </Link>
        <Link to="/comics">
          <h2>Comics</h2>
        </Link>
        <Link to="favourites">
          <h2>Favoris</h2>
        </Link>
      </menu>
    </div>
  );
};

export default Header;
