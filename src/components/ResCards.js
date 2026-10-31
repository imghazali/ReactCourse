import { CARD_IMG } from "../utils/constants";
import { useState } from "react";

const ResCard = (props) => {

  let { image, name, price, category, isVeg, rating } = props.resData[0];
  console.log(props);
  return (
    <div className="res-card" >
      <img className="card-img" src={image} />
      <h3>{name}</h3>
      <h5>Price: Rs. {price}</h5>
      <h5>Category: {category}</h5>
      <h5>Is Veg : {isVeg ? "Vegetarian" : "Non-Vegetarian"}</h5>
      <h5>Rating: {rating}</h5>
    </div>
  );
};
export default ResCard;
