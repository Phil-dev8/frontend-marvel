import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AtomSpinner } from "react-epic-spinners";
import { StarSvg } from "../assets/svg/star";
// import toast, { Toaster } from 'react-hot-toast';

export const CHARACTER = "CHARACTER";
export const COMIC = "COMIC";

export const FavoriteCard = ({ elem, type, userId }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          type === CHARACTER
            ? `https://site--backend-marvel--nm6dw4wybf2m.code.run/character/${elem}?`
            : `https://site--backend-marvel--nm6dw4wybf2m.code.run/comic/${elem}?`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [elem, type]);

  const onRemoveFavorite = async () => {
    if (!userId)
      return alert("Vous devez être connecté pour ajouter un favori");

    try {
      await axios.delete(
        type === CHARACTER
          ? `https://site--backend-marvel--nm6dw4wybf2m.code.run/users/${userId}/favorites/characters/${elem}`
          : `https://site--backend-marvel--nm6dw4wybf2m.code.run/users/${userId}/favorites/comics/${elem}`
      );
      // setIsFavorite(true);
      window.location.reload();
    } catch (error) {
      console.log(error.response);
    }
  };

  return loading ? (
    <div className="spinner">
      <AtomSpinner
        className="spinner-for-responsive"
        color="rgb(148, 0, 0)"
        size={50}
      />
    </div>
  ) : (
    <div className="card">
      <div className="card-header">
        <div onClick={async () => onRemoveFavorite()}>
          <StarSvg backgroundColor="yellow" cursor="pointer" />
        </div>
        <p className="name">{type === CHARACTER ? data.name : data.title}</p>
      </div>
      <div className="card-image">
        {type === CHARACTER ? (
          <Link className="link" to={`/comics/${data._id}`}>
            <img
              className="picture"
              src={data.thumbnail.path + "." + data.thumbnail.extension}
              alt="character"
            />
          </Link>
        ) : (
          <img
            className="picture"
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt="character"
          />
        )}

        {data.description ? (
          <span>{data.description}</span>
        ) : (
          <span>Pas de description disponible.</span>
        )}
      </div>
    </div>
  );
};
