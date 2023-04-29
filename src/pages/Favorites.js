import { useEffect, useState } from "react";
import axios from "axios";
import { CHARACTER, COMIC, FavoriteCard } from "../components/FavoriteCard";

// import { AuthModal } from "../components/AuthModal";

const Favorites = ({ onOpenAuthModal }) => {
  const [charactersFav, setCharactersFav] = useState([]);
  const [comicsFav, setComicsFav] = useState([]);
  const [userId, setUserId] = useState(null);
  const [reloadFavorites, setReloadFavorites] = useState(false);

  const onReloadFavorites = () => setReloadFavorites((prev) => !prev);

  useEffect(() => {
    (async () => {
      const userData = localStorage.getItem("user");
      const user = JSON.parse(userData);
      const userId = user?._id;

      if (user) {
        const charactersData = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/users/${userId}/favorites/characters`
        );
        setCharactersFav(charactersData.data);
        const comicsData = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/users/${userId}/favorites/comics`
        );
        setComicsFav(comicsData.data);
        setUserId(userId);
      } else {
        onOpenAuthModal();
      }
    })();
    // eslint-disable-next-line
  }, [reloadFavorites]);

  return (
    <>
      <h3>Personnages favoris</h3>
      <div className="container">
        {charactersFav.map((elem, index) => {
          return (
            <FavoriteCard
              key={index}
              elem={elem}
              type={CHARACTER}
              userId={userId}
              onReloadFavorites={onReloadFavorites}
            />
          );
        })}
      </div>
      <h3>Comics favoris</h3>

      <div className="container">
        {comicsFav.map((elem, index) => {
          return (
            <FavoriteCard
              key={index}
              elem={elem}
              type={COMIC}
              userId={userId}
              onReloadFavorites={onReloadFavorites}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
