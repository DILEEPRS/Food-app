import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_LINK } from "./config";
import Shimmer from "./Shimmer";

const Resturantmenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
  const [resturant, setRestauraunt] = useState(null);
  console.log(resId);

  useEffect(() => {
    getresturantInfo();
  }, []);

  async function getresturantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9083215&lng=77.6050777&restaurantId=" +
        resId
    );
    const json = await data.json();

    setRestauraunt(json.data.cards[0].card.card.info);
  }

  return !resturant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id{resId}</h1>
        <h2>{resturant?.name}</h2>
        <img src={CDN_LINK + resturant?.cloudinaryImageId} />
        <h3>{resturant?.areaName}</h3>
        <h3>{resturant?.city}</h3>
        <h3>{resturant?.avgRating} stars</h3>
        <h3>{resturant?.costForTwoMessage}</h3>
      </div>
    </div>
  );
};

export default Resturantmenu;
