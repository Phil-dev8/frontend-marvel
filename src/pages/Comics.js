import { useState, useEffect } from "react";
import axios from "axios";
import ComicsCard from "../components/ComicsCard";
import Cookies from "js-cookie";

const Comics = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [favoriteComic, setFavoriteComic] = useState(
    Cookies.get("favorite-comic")
      ? Cookies.get("favorite-comic").split(",")
      : []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/comics?title=${search}&skip=${skip}`
        );
        setData(response.data);
        //console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search, skip]);

  return loading ? (
    <p style={{ color: "white" }}>Chargement</p>
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Rechercher parmis les 14000 comics"
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
          onClick={() => {
            setSkip(skip + 100);
          }}
        >
          SUIVANT
        </button>
      </div>
      <div className="container">
        {data.results.map((elem) => {
          // if (
          //   elem.thumbnail.path ===
          //   "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          // )
          //   return null;
          // else {
          return (
            <div key={elem._id}>
              <ComicsCard elem={elem} />
              <button
                className="fav"
                onClick={() => {
                  const newTab = [...favoriteComic];
                  if (newTab.indexOf(elem._id) === -1) {
                    newTab.push(elem._id);
                    alert("Personnage ajouté aux favoris");
                  } else {
                    alert("Vous avez déja ajouté ce personnage en favoris");
                  }
                  Cookies.set("favorite-comic", newTab, {
                    expires: 3,
                  });
                  setFavoriteComic(newTab);
                }}
              >
                Favoris
              </button>
            </div>
          );
          // }
        })}
      </div>
    </>
  );
};

export default Comics;
