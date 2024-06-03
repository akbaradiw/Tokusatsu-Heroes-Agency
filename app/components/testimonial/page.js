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
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [carousel]);
  return (
    <div className="flex justify-center mt-6">
      <div className="grid grid-cols-3">
        {testimonialList.map((item, index) => (
          <div
            key={index}
            className={
              index === carousel
              ? "border-2 border-black"
                : "border-2 border-black hidden"
            }
          >
            {/* <Image
              src="/d417got-de332d28-2d89-4abe-9371-fa8b721e140f.png"
              alt="Testimonial Image"
              width={100}
              height={100}
              className="w-1/2 h-auto"
            /> */}
            <p className="text-center">{item.testi}</p>
            <p className="text-center">{item.customer}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={clickPrev}
          className="bg-gray-800 text-white px-4 py-2 mx-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={clickNext}
          className="bg-gray-800 text-white px-4 py-2 mx-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
