import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
// import Cookies from "js-cookie";
import { AtomSpinner } from "react-epic-spinners";

const Characters = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);

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
    <div className="spinner">
      <AtomSpinner color="rgb(148, 0, 0)" size="500" />
    </div>
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Rechercher parmis les 1500 personnages"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
      </div>
      <div className="button">
        <div>
          <button
            className={skip === 0 ? "hide" : null}
            onClick={() => {
              setSkip(skip - 100);
            }}
          >
            PRÉCÉDENT
          </button>
        </div>
        <div>
          <button
            className={skip === 1400 ? "hide" : "next"}
            onClick={() => {
              setSkip(skip + 100);
            }}
          >
            SUIVANT
          </button>
        </div>
      </div>

      <div className="container">
        {data.results.map((elem) => {
          return (
            <div key={elem._id}>
              <CharacterCard elem={elem} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
