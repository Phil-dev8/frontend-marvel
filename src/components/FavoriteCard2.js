import { useState, useEffect } from "react";
import axios from "axios";
import { AtomSpinner } from "react-epic-spinners";
const FavoriteCard2 = ({ elem }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/comic/${elem}?`
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [elem]);

  return loading ? (
    <div className="spinner">
      <AtomSpinner color="rgb(148, 0, 0)" size="50" />
    </div>
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
