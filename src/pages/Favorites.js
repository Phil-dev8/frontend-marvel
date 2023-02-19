import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Favorites = () => {
  const favoritesCharacters = Cookies.get("favorite-character");
  const favoritesComics = Cookies.get("favorite-comic");

  const charactersTab = favoritesCharacters.split(",");
  const comicsTab = favoritesComics.split(",");

  const [dataCharacters, setDataCharacters] = useState();
  const [dataComics, setDataComics] = useState();

  const [loading, setLoading] = useState(true);
  // console.log(charactersTab);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/characters?`
        );
        const response2 = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/comics?`
        );

        setDataCharacters(response.data);
        setDataComics(response2.data);
        // console.log(response.data);
        // console.log(response2.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <div>CHARGEMENT</div>
  ) : (
    <>
      <h3>Personnages favoris</h3>
      <div className="container2">
        {charactersTab.map((fav, index) => {
          return (
            <div key={index}>
              {dataCharacters.results.map((elem, index) => {
                return (
                  <div key={index}>
                    {fav === elem._id && (
                      <div className="favorite-character">
                        <span>{elem.name}</span>
                        <img
                          src={`${elem.thumbnail.path}/standard_medium.${elem.thumbnail.extension}`}
                          alt="fav character"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <h3> Comics favoris</h3>
      <div className="container2">
        {comicsTab.map((fav, index) => {
          return (
            <div key={index}>
              {dataComics.results.map((elem, index) => {
                return (
                  <div key={index}>
                    {fav === elem._id && (
                      <div className="favorite-comic">
                        <span>{elem.title}</span>
                        <img
                          src={`${elem.thumbnail.path}/standard_medium.${elem.thumbnail.extension}`}
                          alt="fav comic"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favorites;