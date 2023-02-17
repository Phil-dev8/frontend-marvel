import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacterComics = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const { characterId } = useParams();

  //   const picture =
  //     data.thumbnail.path + "/portrait_uncanny." + data.thumbnail.extension;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/comics/${characterId}?apiKey=`
        );

        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [characterId]);

  return loading ? (
    <div style={{ color: "white" }}>
      JE SUIS SUR CETTE PUTAIN DE PAGE DE MERDE
    </div>
  ) : (
    <>
      <div className="character">
        <img
          className="character-pic"
          src={
            data.thumbnail.path +
            "/portrait_incredible." +
            data.thumbnail.extension
          }
          alt="character"
        />

        <div className="character-infos">
          <p className="character-name">{data.name}</p>
          <p className="character-description">{data.description}</p>
          <button className="favorites">Ajouter aux favoris</button>
        </div>
      </div>
      <p className="sentence">
        Ce personnage est à retrouver dans les comics suivants :
      </p>
      <div className="characterincomics">
        {data.comics.map((picture, id) => {
          return (
            <div key={id}>
              <img
                src={
                  picture.thumbnail.path +
                  "/portrait_uncanny." +
                  picture.thumbnail.extension
                }
                alt="comic"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CharacterComics;
