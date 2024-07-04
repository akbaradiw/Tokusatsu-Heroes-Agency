"use client";
import Image from "next/image";
import { porto } from "../../data/porto";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <h1 className="lg:pt-40 pt-10 lg:text-3xl text-xl md:text-2xl text-center">
        Selama beberapa dekade kami telah berkontribusi demi kedamaian
        kehidupan umat manusia
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:pt-20 pt-10 pb-40 px-10 ">
        {porto.map((item) => (
          <div key={item.id} data-aos="flip-up" data-aos-duration="500">
            <Image
              src={item.image}
              alt={item.description}
              width={500}
              height={500}
              className="rounded-lg shadow-lg mb-6 hover:scale-110 transition ease-in-out delay-150"
            />
            <div className=" flex justify-start">
              <p className="border-b-2 text-red-600 border-red-600 pb-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
