import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_LINK } from "./config";
import Shimmer from "./Shimmer";

const Resturantmenu = () => {
  const { bd } = useParams();

  const [resturant, setRestauraunt] = useState(null);

  useEffect(() => {
    getresturantInfo();
  }, []);

  async function getresturantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9083215&lng=77.6050777&restaurantId=" +
        bd
    );
    const json = await data.json();

    setRestauraunt(json.data.cards[0].card.card.info);

    console.log(json.data.cards[2]);
  }

  return !resturant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id{bd}</h1>
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
