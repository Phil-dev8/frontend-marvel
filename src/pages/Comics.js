import { useState, useEffect } from "react";
import axios from "axios";
import ComicsCard from "../components/ComicsCard";

const Comics = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/comics?title=${search}`
        );
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search]);

  return loading ? (
    <p>Chargement</p>
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Rechercher un comics"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
      </div>
      <div className="container">
        {data.results.map((elem, index) => {
          if (
            elem.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          )
            return null;
          else {
            return <ComicsCard key={index} elem={elem} />;
          }
        })}
      </div>
    </>
  );
};

export default Comics;
