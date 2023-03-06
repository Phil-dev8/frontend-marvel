import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

const FavoriteCard = ({ elem }) => {
  //   const { characterId } = useParams();
  //   console.log(characterId);
  console.log(elem);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/character/${elem}?`
        );

        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  });

  return (
    <div className="character-card">
      {/* <p className="name">{name}</p> */}
      <div className="test">
        {/* <img className="picture" src={picture} alt="" /> */}
        {/* {elem.description ? (
          <span>{elem.description}</span>
        ) : (
          <span>Pas de description disponible.</span>
        )} */}
      </div>
    </div>
  );
};

export default FavoriteCard;
