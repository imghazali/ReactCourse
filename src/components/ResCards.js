const ResCards = ({ resData }) => {
  const info = resData?.info || resData;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    avgRatingString,
    costForTwo,
    sla,
    areaName,
    aggregatedDiscountInfoV3,
  } = info || {};

  const imageUrl = cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
    : "";

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img className="res-img" src={imageUrl} alt={name || "Restaurant"} />

        {aggregatedDiscountInfoV3 && (
          <div className="discount">
            {aggregatedDiscountInfoV3.header}{" "}
            {aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
      </div>

      <div className="res-details">
        <h3>{name}</h3>

        <p className="rating">
          ⭐ {avgRatingString || avgRating || "N/A"}
          {" · "}
          {sla?.deliveryTime || "N/A"} mins
        </p>

        <p className="cuisines">{cuisines?.join(", ") || "Various cuisines"}</p>

        <p>{areaName || "Location unavailable"}</p>

        <p>{costForTwo || ""}</p>
      </div>
    </div>
  );
};

export default ResCards;
