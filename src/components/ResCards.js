import { CARD_IMG } from "../utils/constants";

const ResCard = (props) => {
  let [data] = props.resData;
  console.log(props);
  return (
    <div className="res-card">
      <img className="card-img" src={data.image} />
      <h3>{data.name}</h3>
      <h5>Price: Rs. {data.price}</h5>
      <h5>Category: {data.category}</h5>
      <h5>Is Veg : {data.isVeg ? "Yes" : "No"}</h5>
      <h5>Rating: {data.rating}</h5>
    </div>
  );
};
export default ResCard;
