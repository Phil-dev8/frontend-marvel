import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/characters?name=${search}`
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
          placeholder="Rechercher un personnage"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
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
          return <CharacterCard key={index} elem={elem} />;
          // }
        })}
      </div>
    </>
  );
};

export default Home;
