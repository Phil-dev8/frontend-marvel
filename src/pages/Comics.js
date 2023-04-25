import { useState, useEffect } from "react";
import axios from "axios";
import ComicsCard from "../components/ComicsCard";
import { AtomSpinner } from "react-epic-spinners";
import { ReactComponent as SearchIcon } from "../assets/img/search.svg";

const Comics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/comics?title=${search}&skip=${skip}`
        );
        setData(response.data);

        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search, skip]);

  return loading ? (
    <div className="spinner">
      <AtomSpinner color="rgb(148, 0, 0)" size={500} />
    </div>
  ) : (
    <>
      <div className="button">
        <div>
          <button
            className={skip === 0 ? "hide" : null}
            onClick={() => {
              setSkip(skip - 100);
            }}
          >
            Précédent
          </button>
        </div>
        <div className="search">
          <SearchIcon />
          <input
            type="text"
            className={"search-input"}
            placeholder="Rechercher parmis les 14000 comics"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <button
            className="next"
            onClick={() => {
              setSkip(skip + 100);
            }}
          >
            Suivant
          </button>
        </div>
      </div>
      <div className="container">
        {data?.results?.map((elem) => {
          return <ComicsCard key={elem._id} elem={elem} />;
        })}
      </div>
    </>
  );
};

export default Comics;
