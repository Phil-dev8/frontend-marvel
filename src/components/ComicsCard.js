import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ComicsCard = ({ elem }) => {
  let picture =
    elem.thumbnail.path + "/standard_medium." + elem.thumbnail.extension;
  const [favoriteComic, setFavoriteComic] = useState(
    Cookies.get("favorite-comic")
      ? Cookies.get("favorite-comic").split(",")
      : []
  );

  return (
    <div className="card">
      <div className="card-header">
        <FontAwesomeIcon
          icon="star"
          className="icon"
          onClick={() => {
            const newTab = [...favoriteComic];
            if (newTab.indexOf(elem._id) === -1) {
              newTab.push(elem._id);
              toast.success("favoris ajouté");
            } else {
              alert("Vous avez déja ajouté ce comic en favoris");
            }
            Cookies.set("favorite-comic", newTab, {
              expires: 3,
            });
            setFavoriteComic(newTab);
          }}
        />
        <p className="name">{elem.title}</p>
      </div>
      <div className="card-image">
        <img
          className="picture"
          src={
            elem.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              ? "https://www.pngall.com/wp-content/uploads/4/Marvel-Avengers-PNG-Free-Image.png"
              : elem.thumbnail.path + "." + elem.thumbnail.extension
          }
          alt="comic-illustration"
        />
        {elem.description ? (
          <span>{elem.description}</span>
        ) : (
          <span>Pas de description disponible</span>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default ComicsCard;
