import React from "react";
import { Link } from "react-router-dom";

function Card({ item, handleClick }) {
  const { id, name, image, price } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <Link to={"/item/" + item._id}>
          <img src={image} alt="" />{" "}
        </Link>{" "}
      </div>{" "}
      <div className="details">
        <Link to={"/item/" + item._id}>
          {" "}
          <p> {name} </p>{" "}
        </Link>
        <p>
          {" "}
          Price - {price}
          som{" "}
        </p>{" "}
        <button onClick={() => handleClick(item)}> Add to Cart </button>{" "}
      </div>{" "}
    </div>
  );
}

export default Card;
