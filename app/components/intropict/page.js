"use client";
import { useState, useEffect } from "react";
import { introImage } from "../../data/introimage";
import Image from "next/image";

const IntroPict = () => {
    const [slider, setslider] = useState(0);

  const clickNext = () => {
    slider === introImage.length - 1
      ? setslider(0)
      : setslider(slider + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [slider]);
  return (
    <div className="ms-20">
      {introImage.map((item, index) => (
          <div
            key={index}
            className={
              index === slider
                ? " border-2 rounded-lg border-red-500 flex"
                : "hidden justify-center"
            }
          >
           
            <div>
              <p className="text-center font-bold text-red-500">{item.name}</p>
              <Image
                src={item.image}
                alt="Testimonial Image"
                width={600}
                height={240}
                className=""
              />
            </div>
           
          </div>
        ))}
      </div>
    )

}

export default IntroPict