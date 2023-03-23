import { ResturantList } from "./config";
import RestrauntCard from "./Restocard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { filterData } from "./config";

const Body = () => {
  const [allresturants, setallresturants] = useState([]);
  const [resturants, setresturants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    restoinfo();
  }, []);
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>check your internet connection</h1>;
  }

  async function restoinfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setallresturants(json?.data?.cards[2]?.data?.data?.cards);
    setresturants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allresturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
            }}
          />
          <button
            onClick={() => {
              const data = filterData(search, allresturants);
              setresturants(data);
            }}
          >
            search
          </button>
        </div>
        <div className="cardbody">
          {resturants.map((resturants) => {
            return (
              <Link
                to={"/resturant/" + resturants.data.id}
                key={resturants.data.id}
              >
                <RestrauntCard {...resturants.data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
