import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import Cookies from "js-cookie";

const Characters = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [favoriteCharacter, setFavoriteCharacter] = useState([]);
  // console.log(favoriteCharacter);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/characters?name=${search}&skip=${skip}`
        );

        setData(response.data);
        //console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search, skip]);

  return loading ? (
    <p style={{ color: "white" }}>Chargement </p>
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Rechercher parmis les 1493 personnages"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
      </div>
      <div className="button">
        <button
          className={skip === 0 ? "hide" : null}
          onClick={() => {
            setSkip(skip - 100);
          }}
        >
          PRÉCÉDENT
        </button>
        <button
          className="next"
          onClick={() => {
            setSkip(skip + 100);
          }}
        >
          SUIVANT
        </button>
      </div>

      <div className="container">
        {data.results.map((elem, index) => {
          // CE IF PERMET DE N'AFFICHER QUE LES PERSONNAGES QUI ONT UNE IMAGE
          // if (
          //   elem.thumbnail.path ===
          //   "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          // ) {
          //   return null;
          // } else {
          // setCharacter(elem._id);
          //console.log(elem._id);
          return (
            <div key={elem._id}>
              <Link className="link" to={`/comics/${elem._id}`} id={elem._id}>
                <CharacterCard elem={elem} />
              </Link>
              <button
                className="fav"
                onClick={() => {
                  const newTab = [...favoriteCharacter];
                  newTab.push(elem._id);
                  setFavoriteCharacter(newTab);
                  // console.log(newTab);

                  Cookies.set("favorite-character", newTab, {
                    expires: 3,
                  });
                  console.log(Cookies.get("favorite-character"));
                  // console.log(cookie);
                }}
              >
                Favoris
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;