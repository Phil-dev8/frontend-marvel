import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useState } from "react";

const CharacterCard = ({ elem }) => {
  const [favoriteCharacter, setFavoriteCharacter] = useState(
    Cookies.get("favorite-character")
      ? Cookies.get("favorite-character").split(",")
      : []
  );

  return (
    <div className="card">
      <div className="card-header">
        <FontAwesomeIcon
          icon="star"
          className="icon"
          onClick={() => {
            const newTab = [...favoriteCharacter];
            if (newTab.indexOf(elem._id) === -1) {
              newTab.push(elem._id);
              alert("Personnage ajouté aux favoris");
            } else {
              alert("Vous avez déja ajouté ce personnage en favoris");
            }
            Cookies.set("favorite-character", newTab, {
              expires: 3,
            });
            setFavoriteCharacter(newTab);
          }}
        />
        <p className="name">{elem.name}</p>
      </div>

      <div className="card-image">
        <Link to={`/comics/${elem._id}`} id={elem._id}>
          <img
            className="picture"
            src={
              elem.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                ? "https://www.pngall.com/wp-content/uploads/4/Marvel-Avengers-PNG-Free-Image.png"
                : elem.thumbnail.path + "." + elem.thumbnail.extension
            }
            alt="character"
          />
        </Link>

        {elem.description ? (
          <span>{elem.description}</span>
        ) : (
          <span>Pas de description disponible.</span>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
