import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_IMG_URL + cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>⭐ {avgRating} Stars</h4>
      <h5>Time To Deliiver {sla?.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
