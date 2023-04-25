import { useEffect, useState } from "react";
import axios from "axios";
import { CHARACTER, COMIC, FavoriteCard } from "../components/FavoriteCard";

const Favorites = () => {
  const [charactersFav, setCharactersFav] = useState([]);
  const [comicsFav, setComicsFav] = useState([]);

  useEffect(() => {
    (async () => {
      const charactersData = await axios.get(
        `https://site--backend-marvel--nm6dw4wybf2m.code.run/users/6426f4d60afb7583f103f295/favorites/characters`
      );
      setCharactersFav(charactersData.data.characterFavorites);
      const comicsData = await axios.get(
        "https://site--backend-marvel--nm6dw4wybf2m.code.run/users/6426f4d60afb7583f103f295/favorites/comics"
      );
      setComicsFav(comicsData.data.comicFavorites);
    })();
  }, []);

  return (
    <>
      <h3>Personnages favoris</h3>
      <div className="container">
        {charactersFav.map((elem, index) => {
          return <FavoriteCard key={index} elem={elem} type={CHARACTER} />;
        })}
      </div>
      <h3>Comics favoris</h3>
      <div className="container">
        {comicsFav.map((elem, index) => {
          return <FavoriteCard key={index} elem={elem} type={COMIC} />;
        })}
      </div>
    </>
  );
};

export default Favorites;
