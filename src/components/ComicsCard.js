// import { Link } from "react-router-dom";
import { StarSvg } from "../assets/svg/star";
import axios from "axios";
import { useEffect, useState } from "react";

const ComicCard = ({ elem, favoritesData, userId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  let picture = elem.thumbnail.path + "." + elem.thumbnail.extension;

  useEffect(() => {
    if (favoritesData) {
      const isFavorite = favoritesData?.includes(elem._id);
      setIsFavorite(isFavorite);
    }
  }, [favoritesData, elem._id]);

  const onAddFavorite = async () => {
    if (!userId)
      return alert("Vous devez être connecté pour ajouter un favori");

    try {
      await axios.put(
        `https://site--backend-marvel--nm6dw4wybf2m.code.run/users/${userId}/favorites/comics/${elem._id}`
      );
      setIsFavorite(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  const onRemoveFavorite = async () => {
    if (!userId)
      return alert("Vous devez être connecté pour ajouter un favori");

    try {
      await axios.delete(
        `https://site--backend-marvel--nm6dw4wybf2m.code.run/users/${userId}/favorites/comics/${elem._id}`
      );
      setIsFavorite(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div
          onClick={async () =>
            isFavorite ? onRemoveFavorite() : onAddFavorite()
          }
        >
          <StarSvg
            backgroundColor={isFavorite ? "yellow" : "white"}
            cursor="pointer"
          />
        </div>
        <p className="name">{elem.title}</p>
      </div>
      <div className="card-image">
        <img className="picture" src={picture} alt="" />

        {elem.description ? (
          <span>{elem.description}</span>
        ) : (
          <span>Pas de description disponible.</span>
        )}
      </div>
    </div>
  );
};

export default ComicCard;
