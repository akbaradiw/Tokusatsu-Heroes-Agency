"use client";
import { useState, useEffect } from "react";
import { tokuHero } from "@/app/data/tokuhero";
import Testimonial from "../testimonial/page";
import Image from "next/image";
const About = () => {
  return (
    <div className="lg:flex  lg:justify-around lg:mt-20 mt-10  ">
      <div className="lg:w-1/2 lg:h-auto ">
        <h1 className=" text-2xl my-2 text-center   font-bold  text-red-600 ">
          Our Services
        </h1>
        {/* <h2 className="text-center mb-2 text-xl text-red-600">
          {" "}
          Kami siap membantu kalian menegakkan keadilan & menumpas kejahatan!
        </h2> */}
        {/* <p className="">
          私たちは正義を守り、犯罪を根絶するために全力を尽くします
          顧客は非常に重要であり、顧客は顧客に続きます。はい、そして私のものです。子どもたちはバスケットボールから恩恵を受けています。妊婦には今、清潔なメイクが必要です。今はヘイト行為は行われておらず、医療の尊厳が必要とされている時期です。著者は生きろと言った。明日は悲劇的な出来事の行方です。アエネアンの喉は代償以外は誰も恐れていないが、高校は妊娠している。
          実際のところ、フットボール 
        </p>{" "} */}
        <ul className="lg:text-lg ps-2 mx-4 mb-8  border-2 shadow-md rounded-md border-red-600 divide-y divide-red-600">
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
      <div>
        <Testimonial />
      </div>
    </div>
  );
};
export default About;
