"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { testimonialList } from "../../data/testimony";
const Testimonial = () => {
  const [carousel, setCarousel] = useState(0);

  const clickNext = () => {
    carousel === testimonialList.length - 1
      ? setCarousel(0)
      : setCarousel(carousel + 1);
  };
  const clickPrev = () => {
    carousel === 0
      ? setCarousel(testimonialList.length - 1)
      : setCarousel(carousel - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [carousel]);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Testimonial</h1>
    <div className="flex justify-center mt-6">
      <div className="my-20">
        <button
          onClick={clickPrev}
          className="bg-red-600 text-white px-4 mx-2 rounded-lg"
        >
          Prev
        </button>
      </div>

      {testimonialList.map((item, index) => (
        <div
          key={index}
          className={
            index === carousel
              ? "border-2 rounded-lg"
              : "border-2 rounded-lg hidden"
          }
        >
          <div className="flex justify-center">
            <Image
              src={item.image}
              alt="Testimonial Image"
              width={150}
              height={100}
              className="w-100 h-auto rounded-full mt-5 shadow-md"
            />
          </div>

          <div className="text-center mx-3 my-4">
            <p className="mb-4 mt-6">{item.testi}</p>
            <p>{item.customer}</p>
          </div>
        </div>
      ))}
      <div className="my-20">
        <button
          onClick={clickNext}
          className="bg-red-600 text-white px-4  mx-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
