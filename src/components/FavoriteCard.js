import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AtomSpinner } from "react-epic-spinners";

const FavoriteCard = ({ elem }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/character/${elem}?`
        );
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
        // console.log(response.data);
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
    <div className="character-card">
      <p className="name">{data.name}</p>
      <div className="test">
        <Link className="link" to={`/comics/${data._id}`}>
          <img
            className="picture"
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt="character"
          />
        </Link>

        {data.description ? (
          <span>{data.description}</span>
        ) : (
          <span>Pas de description disponible.</span>
        )}
      </div>
    </div>
  );
};

export default FavoriteCard;
