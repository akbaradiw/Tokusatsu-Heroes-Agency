"use client";
import { useState, useEffect } from "react";
import { tokuHero } from "..//data/tokuhero";
import Image from "next/image";
import Swal from "sweetalert2";
const Heroes = () => {
  const [filteredItems, setFilteredItems] = useState(tokuHero);
  const [thisFilter, setThisFilter] = useState("");

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

  const bookHeroes = () => {
    Swal.fire({
      text: "Apakah kalian yakin ingin memilih hero ini?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#000000",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Completed",
          text: "Heroes Selected",
          confirmButtonText: "Fight!",
          confirmButtonColor: "#304057",
          color: "#304057",
        });
      } else {
        Swal.fire({
          title: "Cancelled!",
          confirmButtonText: "Back",
          confirmButtonColor: "#304057",
          color: "#304057",
         
        });
      }
    });
  };
  return (
    <div className=" grid pt-10">
      <div className="flex justify-center gap-5 mt-10">
        <button
          className="cursor-pointer  border border-none text-white bg-red-600 rounded-full py-1 px-3  hover:bg-red-800"
          onClick={handleFilter}
          value={""}
        >
          All
        </button>
        <button
          className="cursor-pointer border border-none text-white bg-red-600 rounded-full py-1 px-3  hover:bg-red-800"
          onClick={handleFilter}
          value={"Kamen Rider"}
        >
          Kamen Rider
        </button>
        <button
          className="cursor-pointer border border-none text-white bg-red-600 rounded-full py-1 px-3  hover:bg-red-800"
          onClick={handleFilter}
          value={"Metal Heroes"}
        >
          Metal Heroes
        </button>
        <button
          className="cursor-pointer border border-none text-white bg-red-600 rounded-full py-1 px-3  hover:bg-red-800"
          onClick={handleFilter}
          value={"Super Sentai"}
        >
          Super Sentai
        </button>
        <button
          className="cursor-pointer border border-none text-white bg-red-600 rounded-full py-1 px-3  hover:bg-red-800"
          onClick={handleFilter}
          value={"Ultraman"}
        >
          Ultraman
        </button>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-10 lg:ps-10 px-3 md:px-6 md:gap-6 gap-2 lg:gap-9">
        {filteredItems.map((item) => (
          <div
            className=" border-2 border-red-600 rounded-lg  hover:-translate-y-4 hover:scale-110 transition ease-in-out delay-150 hover:shadow-md hover:shadow-stone-800  "
            key={item.id}
          >
            <div className= "relative group ">
            <Image
              src={item.image}
              alt="Hero Image"
              width={150}
              height={200}
              className="w-auto h-auto pt-2  "
            />
            <div className="text-red-600 ms-3 pt-3 pb-2 ">
              <p>Name : {item.name}</p>
              <p>Type : {item.category}</p>
              <div className="group-hover:to-white/80 from-white/0 to-black/50 top-0">
                <button onClick={bookHeroes} className=" absolute top-0 right-0  bg-paleBlue  hover:bg-red-800 opacity-0 group-hover:opacity-100 border-2 border-none  bg-red-600 text-white rounded inline-block transition duration-300 ease-in-out m-2  py-1 px-2">Confrim</button>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heroes;
