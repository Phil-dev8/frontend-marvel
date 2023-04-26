import logo from "../assets/img/Marvel_Logo.svg.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({ onOpenAuthModal }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUser(JSON.parse(userData));
  }, []);

  const onSignOut = () => {
    localStorage.removeItem("user");
    setUser({});
    window.location.reload();
  };

  return (
    <div>
      <div className="container-header">
        {user && <p className="username-header">{user.username}</p>}
        <header>
          <Link to="/">
            <img src={logo} alt="logo de la marque" />
          </Link>
        </header>

        {user ? (
          <button className="auth-button" onClick={onSignOut}>
            Déconnexion
          </button>
        ) : (
          <button className="auth-button" onClick={onOpenAuthModal}>
            Connexion
          </button>
        )}
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
