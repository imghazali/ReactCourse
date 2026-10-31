import ResCard from "./ResCards";
import { resObj } from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resObj);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          const filteredRestaurants = listOfRestaurant.filter((res) => {
            return res.rating > 4;
          });
          setListOfRestaurant(filteredRestaurants);
        }}
      >
        TOP RATED RESTAURANTS
      </button>

      <div className="res-container">
        {/* <ResCard resData={resObj} /> */}

        {listOfRestaurant.map((data, id) => {
          return <ResCard key={id} resData={[data]} />;
        })}
      </div>
    </>
  );
};

export default Body;
