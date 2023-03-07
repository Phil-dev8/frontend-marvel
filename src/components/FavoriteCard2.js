import { useState, useEffect } from "react";
import axios from "axios";

const FavoriteCard2 = ({ elem }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/comic/${elem}?`
        );
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [elem]);

  return loading ? (
    <p>Chargement</p>
  ) : (
    <div className="comics-card">
      <p className="name">{data.title}</p>
      <div className="test">
        <img
          className="picture"
          src={data.thumbnail.path + "." + data.thumbnail.extension}
          alt="character"
        />
        {data.description ? (
          <span>{data.description}</span>
        ) : (
          <span>Pas de description disponible.</span>
        )}
      </div>
    </div>
  );
};

export default FavoriteCard2;
