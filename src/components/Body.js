import { useEffect, useState } from "react";
import ResCards from "./ResCards";

const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

// Extract restaurant information from Swiggy response
const extractRestaurants = (data) => {
  const cards = data?.data?.cards || [];

  const restaurants = cards.flatMap((item) => {
    const card = item?.card?.card;

    return (
      card?.gridElements?.infoWithStyle?.restaurants || card?.restaurants || []
    );
  });

  // Remove duplicate restaurants
  return [
    ...new Map(
      restaurants.map((res) => [res.info?.id || res.id, res]),
    ).values(),
  ];
};

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch restaurant data");
        }

        const json = await response.json();

        const restaurantList = extractRestaurants(json);

        setRestaurants(restaurantList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <h2>Loading restaurants...</h2>;

  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="body">
      <h2>Restaurants Near You</h2>

      <div className="res-container">
        {restaurants.map((restaurant) => (
          <ResCards
            key={restaurant.info?.id || restaurant.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
