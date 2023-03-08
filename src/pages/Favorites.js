import Cookies from "js-cookie";
import FavoriteCard from "../components/FavoriteCard";
import FavoriteCard2 from "../components/FavoriteCard2";

const Favorites = () => {
  const favoritesCharacters = Cookies.get("favorite-character");
  const favoritesComics = Cookies.get("favorite-comic");
  const charactersTab = favoritesCharacters
    ? favoritesCharacters.split(",")
    : [];
  const comicsTab = favoritesComics ? favoritesComics.split(",") : [];

  console.log(comicsTab);

  return (
    <>
      <h3>Personnages favoris</h3>
      <div className="container">
        {charactersTab.map((elem, index) => {
          return <FavoriteCard key={index} elem={elem} />;
        })}
      </div>
      <h3>Comics favoris</h3>
      <div className="container">
        {comicsTab.map((elem, index) => {
          return <FavoriteCard2 key={index} elem={elem} />;
        })}
      </div>
    </>
  );
};

export default Favorites;
