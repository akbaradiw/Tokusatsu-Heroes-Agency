"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { testimonialList } from "../../data/testimony";
import AOS from "aos";
import "aos/dist/aos.css";
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
    }, 5555);
    return () => {
      clearTimeout(timer);
    };
  }, [carousel]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h1
        className="text-2xl font-bold text-red-600 text-center"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        Testimonials
      </h1>
      <div
        className="flex justify-center mt-6"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="false"
      >
        {testimonialList.map((item, index) => (
          <div
            key={index}
            className={
              index === carousel
                ? "border-2 border-red-600 shadow-md rounded-lg lg:w-1/2 lg:h-auto mx-4"
                : "border-2 border-red-600  shadow-md rounded-lg hidden lg:w-1/2 lg:h-auto"
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
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={clickPrev}
          className="bg-red-600 text-white px-4 mx-2 rounded-lg  lg:hover:bg-red-800 shadow-md "
        >
          Prev
        </button>
        <button
          onClick={clickNext}
          className="bg-red-600 text-white px-4  mx-2 rounded-lg  lg:hover:bg-red-800 shadow-md "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
