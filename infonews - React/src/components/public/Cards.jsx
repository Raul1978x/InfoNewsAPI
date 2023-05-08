import React, { useEffect, useState } from "react";
import Tarjeta from "./Tarjeta";
import axios from "axios";
import "../../css/Card.css";

export const Cards = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/noticias")
      .then((response) => {
        setNoticias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cardList = noticias.map((n) => <Tarjeta noticia={n} key={n.id} />);
  return (
    <div className="album bg-warning bg-opacity-25 py-0 my-0">
      <div className="container py-0 my-0">
        <div className="row  row-cols-2 row-cols-sm-1 row-cols-md-2 ">
          {cardList}
        </div>
      </div>
    </div>
  );
};
export default Cards;
