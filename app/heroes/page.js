"use client";
import { useState, useEffect } from "react";
import { tokuHero } from "..//data/tokuhero";
import Image from "next/image";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
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

  useEffect(() => {
    AOS.init();
  }, []);

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
    <div className="grid lg:pt-20 pb-20 ">
      <div className="flex justify-center pt-6 pb-2 ">
        <h1
          className="lg:text-3xl font-bold py-2 border-b-2 border-red-600  text-red-600 text-xl"
          data-aos="flip-up"
          data-aos-duration="4000"
          data-aos-once="false"
        >
         - HEROES SELECT-
        </h1>
      </div>

      <div className="lg:flex lg:justify-center grid grid-cols-2 gap-2 px-12 lg:gap-5 lg:mt-5 mt-5 ">
        <button
          className="cursor-pointer  border border-none text-white bg-red-600  py-1 px-3  hover:bg-red-800 shadow-md"
          onClick={handleFilter}
          value={""}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          All
        </button>
        <button
          className="cursor-pointer border border-none text-white bg-red-600  py-1 px-3  hover:bg-red-800 shadow-md"
          onClick={handleFilter}
          value={"Kamen Rider"}
          data-aos="fade-down"
          data-aos-duration="700"
        >
          Kamen Rider
        </button>
        <button
          className="cursor-pointer border border-none text-white bg-red-600  py-1 px-3  hover:bg-red-800 shadow-md"
          onClick={handleFilter}
          value={"Metal Heroes"}
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Metal Heroes
        </button>
        <button
          className="cursor-pointer border border-none text-white bg-red-600  py-1 px-3  hover:bg-red-800 shadow-md"
          onClick={handleFilter}
          value={"Super Sentai"}
          data-aos="fade-down"
          data-aos-duration="1100"
        >
          Super Sentai
        </button>
        <button
          className="cursor-pointer border border-none text-white bg-red-600  py-1 px-3  hover:bg-red-800 shadow-md"
          onClick={handleFilter}
          value={"Ultraman"}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Ultraman
        </button>
        <button
          className="cursor-pointer border border-none text-white bg-red-600  py-1 px-3  hover:bg-red-800 shadow-md"
          onClick={handleFilter}
          value={"Other"}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Other
        </button>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-10 lg:ps-10 lg:pt-10 px-3 md:px-6 md:gap-6 gap-4 lg:gap-9">
        {filteredItems.map((item) => (
          <div
            className=" border-2 border-red-600 rounded-lg shadow-sm  hover:-translate-y-4 hover:scale-110 transition ease-in-out delay-150 hover:shadow-md hover:shadow-stone-800  "
            data-aos="flip-down"
            key={item.id}
          >
            <div className="static">
              <Image
                src={item.image}
                alt="Hero Image"
                width={150}
                height={200}
                className="w-auto h-auto pt-2 "
              />
              <div className="text-red-600 ms-3 pt-3 pb-2 ">
                <p>Name : {item.name}</p>
                <p>Type : {item.category}</p>
                <div className="pt-4 pe-2 text-end">
                  <button
                    onClick={bookHeroes}
                    className="px-2 py-1 hover:ease-in-out hover:scale-125   transition duration-200 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-6 h-6"
                    >
                      <path
                        fill="#FFD43B"
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      />
                    </svg>
                  </button>
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
