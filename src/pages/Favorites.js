import Cookies from "js-cookie";
import FavoriteCard from "../components/FavoriteCard";

const Favorites = () => {
  const favoritesCharacters = Cookies.get("favorite-character");
  console.log(favoritesCharacters);

  const charactersTab = favoritesCharacters
    ? favoritesCharacters.split(",")
    : [];

  console.log(charactersTab);

  return (
    <>
      <h3>Personnages favoris</h3>
      {charactersTab.map((elem, index) => {
        console.log(elem);
        return <FavoriteCard key={index} elem={elem} />;
      })}
    </>
  );
};

export default Favorites;
