import { useState, useEffect } from "react";
import axios from "axios";
import ComicsCard from "../components/ComicsCard";

const Comics = () => {
  const [data, setData] = useState();
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
            className="next"
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
          return <ComicsCard key={elem._id} elem={elem} />;
        })}
      </div>
    </>
  );
};

export default Comics;
