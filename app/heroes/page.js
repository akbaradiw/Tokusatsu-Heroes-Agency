"use client";
import { useState, useEffect } from "react";
import { tokuHero } from "..//data/tokuhero";
import Image from "next/image";
const Heroes = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(tokuHero);
  const [thisFilter, setThisFilter] = useState("");

  let filters = ["Showa", "Reiwa", "Heisei"];

  const handleFilter = (dataSelect) => {
    if (selectedFilters.includes(dataSelect)) {
      let filters = selectedFilters.filter((el) => el !== dataSelect);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, dataSelect]);
    }
  };

  useEffect(() => {
    filterData();
  }, [selectedFilters]);

  const filterData = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((dataSelect) => {
        let temp = tokuHero.filter((item) => item.Era === dataSelect);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...tokuHero]);
    }
  };
  return (
    <div className="flex justify-center pt-10">
      <div className="mt-10">
        {filters.map((Era, idx) => (
          <button
            onClick={() => handleFilter(Era)}
            className={`button ${
              selectedFilters?.includes(Era) ? "active" : ""
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
            {Era}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 mt-10 ps-10 gap-9">
        {/* {tokuHero.filter((item) =>
              item.Era.toLowerCase().includes(thisFilter.toLowerCase())
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
              className="w-auto h-auto"
            />
            <div className="text-red-600 ms-3 pt-3">
              <p>Name : {item.name}</p>
              <p>Type : {item.category}</p>
              <p>Era : {item.Era}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heroes;
