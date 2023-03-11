import { ResturantList } from "./config";
import RestrauntCard from "./Restocard";
import { useEffect, useState } from "react";

function filterData(search, resturants) {
  const filterData = resturants.filter((resturants) =>
    resturants.data.data.name.toLowerCase().includes(search.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allresturants, setallresturants] = useState(ResturantList);
  const [resturants, setresturants] = useState(ResturantList);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Search");
  }, [resturants]);

  return (
    <>
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
            <RestrauntCard
              {...resturants.data.data}
              key={resturants.data.data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
