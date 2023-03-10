import { ResturantList } from "./config";
import RestrauntCard from "./Restocard";
import { useState } from "react";

function filterData(search, resturants) {
  const filterData = resturants.filter((resturants) =>
    resturants.data.data.name.includes(search)
  );
  return filterData;
}

const Body = () => {
  const [resturants, setresturants] = useState(ResturantList);
  const [search, setSearch] = useState("");

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
            const data = filterData(search, resturants);
            setresturants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="cardbody">
        {resturants.map((resturants) => {
          return <RestrauntCard {...resturants.data.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
