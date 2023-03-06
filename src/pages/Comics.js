import { useState, useEffect } from "react";
import axios from "axios";
import ComicsCard from "../components/ComicsCard";
import Cookies from "js-cookie";

const Comics = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [favoriteComic, setFavoriteComic] = useState([]);

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
            setSkip(skip - 80);
          }}
        >
          PRÉCÉDENT
        </button>
        <button
          onClick={() => {
            setSkip(skip + 80);
          }}
        >
          SUIVANT
        </button>
      </div>
      <div className="container">
        {data.results.map((elem, index) => {
          // if (
          //   elem.thumbnail.path ===
          //   "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          // )
          //   return null;
          // else {
          return (
            <div key={index}>
              <ComicsCard elem={elem} />
              <button
                className="fav"
                onClick={() => {
                  const newTab = [...favoriteComic];
                  newTab.push(elem._id);
                  setFavoriteComic(newTab);
                  // console.log(newTab);
                  Cookies.set("favorite-comic", newTab, {
                    expires: 3,
                  });
                  alert("Comic ajouté aux favoris");
                  // console.log(cookie);
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
