"use client";
import { useState, useEffect } from "react";
import { tokuHero } from "..//data/tokuhero";
import Image from "next/image";
const Heroes = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(tokuHero);
  const [thisFilter, setThisFilter] = useState("");

  // let filters = ["Kamen Rider", "Metal Heroes"];

  // const handleFilter = (dataSelect) => {
  //   if (selectedFilters.includes(dataSelect)) {
  //     let filters = selectedFilters.filter((el) => el !== dataSelect);
  //     setSelectedFilters(filters);
  //   } else {
  //     setSelectedFilters([...selectedFilters, dataSelect]);
  //   }
  // };

  // useEffect(() => {
  //   filterData();
  // }, [selectedFilters]);

  // const filterData = () => {
  //   if (selectedFilters.length > 0) {
  //     let tempItems = selectedFilters.map((dataSelect) => {
  //       let temp = tokuHero.filter((item) => item.category === dataSelect);
  //       return temp;
  //     });
  //     setFilteredItems(tempItems.flat());
  //   }
  //    else {
  //     setFilteredItems([...tokuHero]);
  //   }

  // };

  // cara kedua
  useEffect(() => {
    if (thisFilter) {
      setFilteredItems(
        tokuHero.filter((product) => product.category === thisFilter)
      );
    } else {
      setFilteredItems(tokuHero);
    }
  }, [thisFilter, tokuHero]);

  const handleFilter = (e) => {
    setThisFilter(e.target.value);
  };
  return (
    <div className=" grid pt-10">
      {/* <div className="mt-10 flex justify-center gap-10">
        {filters.map((category, idx) => (
          <div>
          <button
            onClick={() => handleFilter(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
            style={{
              gap: "10px",
              padding: "10px",
              backgroundColor: "#FFB7B7",
              borderRadius: "10px",
              border: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#FF0000",
                transform: "scale(1.1)",
              },
              "&.active": {
                backgroundColor: "#FF0000",
                transform: "scale(1.1)",
              },
            }}
          >
            {category}
          </button>
          </div>
        ))}
      </div> */}
      {/* <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="Kamen Rider">Kamen Rider</option>
        <option value="Metal Heroes">Metal Heroes</option>
      </select> */}
      <div className="flex justify-center gap-5 mt-10">
      <button className="cursor-pointer  border border-none text-white bg-red-600 rounded-full py-1 px-3  hover:bg-red-800" onClick={handleFilter} value={""}>
        All
      </button>
      <button className="cursor-pointer border border-none text-white bg-red-600 rounded-full py-1 px-3  hover:bg-red-800"
        onClick={handleFilter}
        value={"Kamen Rider"}
      >
        Kamen Rider
      </button>
      <button className="cursor-pointer border border-none text-white bg-red-600 rounded-full py-1 px-3  hover:bg-red-800"
        onClick={handleFilter}
        value={"Metal Heroes"}
      >
        Metal Heroes
      </button>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-10 lg:ps-10 px-3 md:px-6 md:gap-6 gap-2 lg:gap-9">
        {/* {tokuHero.filter((item) =>
              item.category.toLowerCase().includes(thisFilter.toLowerCase())
            ) */}
        {filteredItems.map((item) => (
          <div
            className="border-2 border-red-600 rounded-lg cursor-pointer  "
            key={item.id}
          >
            <Image
              src={item.image}
              alt="Hero Image"
              width={150}
              height={200}
              className="w-auto h-auto "
            />
            <div className="text-red-600 ms-3 pt-3">
              <p>Name : {item.name}</p>
              <p>Type : {item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heroes;
