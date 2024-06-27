
"use client";
import { useEffect } from "react";
import Testimonial from "../testimonial/testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="lg:flex  lg:justify-around lg:mt-20 mt-10  ">
      <div className="lg:w-1/2 lg:h-auto " data-aos="fade-right" data-aos-duration="2000">
        <h1 className=" text-2xl my-2 text-center   font-bold  text-red-600 ">
          Our Services
        </h1>
        <ul className="lg:text-lg ps-2 mx-4 mb-8  border-2 shadow-md rounded-md border-red-600 divide-y divide-red-600" data-aos ="fade-up" data-aos-duration="2000">
          <li className="hover:text-red-600 cursor-pointer ">
            Memberantas begal/klitih{" "}
          </li>
          <li className="hover:text-red-600 cursor-pointer">
            Membantu warga sipil yang sedang dalam keadaan bahaya
          </li>
          <li className="hover:text-red-600 cursor-pointer">
            Menyelidiki/menangani kasus korupsi para pejabat
          </li>
          <li className="hover:text-red-600 cursor-pointer">
            Melindungi bumi dari serangan mahluk luar angkasa{" "}
          </li>
        </ul>
      </div>
      <div className="mb-20">
        <Testimonial />
      </div>
    </div>
  );
};
export default About;
