import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useState } from "react";

const CharacterCard = ({ elem }) => {
  // Quand j'ajoute ".standard_medium." comme dans ComicsCard, ça casse certaines images alors je fais sans..
  let picture = elem.thumbnail.path + "." + elem.thumbnail.extension;
  const [favoriteCharacter, setFavoriteCharacter] = useState(
    Cookies.get("favorite-character")
      ? Cookies.get("favorite-character").split(",")
      : []
  );

  return (
    <div className="character-card">
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

      <div className="test">
        <Link className="link" to={`/comics/${elem._id}`} id={elem._id}>
          <img className="picture" src={picture} alt="" />
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
