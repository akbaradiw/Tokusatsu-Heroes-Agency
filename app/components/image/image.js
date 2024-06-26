"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const ImageSection = () => {
  return (
    <div className="text-center border-b-4  border-red-600 pb-20 ">
      <motion.div
         initial={{ opacity: 0, scale: 0.5, x : -20, y: 10 }}
         animate={{ opacity: 1, scale: 1, x: 10, y: 40 }}
         transition={{ duration: 1.5 , delay: 1.5}}
      >
        <h1 className="lg:text-3xl font-bold py-10  text-red-600 text-xl">
          Our Heroes Will Protect You!!
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-40 gap-10 mx-20  pt-8 ">
          <div className="border-2 shadow-lg border-red-600 rounded-lg hover:-translate-y-4 hover:scale-110 transition ease-in-out delay-150">
            <h1 className="text-red-600 font-bold">KAMEN RIDER</h1>
            <div className="flex justify-center">
              <Image
                src="/kamenrider01.png"
                alt="rider1"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="border-2 shadow-lg  border-red-600  rounded-lg hover:-translate-y-4 hover:scale-110 transition ease-in-out delay-150">
            <h1 className="text-red-600 font-bold">METAL HEROES</h1>
            <div className="flex justify-center">
              <Image
                src="/fire.png"
                alt="fire1"
                width={200}
                height={200}
                className="pt-5"
              />
            </div>
          </div>
          <div className="border-2 shadow-lg  border-red-600  rounded-lg hover:-translate-y-4 hover:scale-110 transition ease-in-out delay-150">
            <h1 className="text-red-600 font-bold">SUPER SENTAI</h1>
            <div className="flex justify-center">
              <Image
                src="/gored.png"
                alt="gored"
                width={250}
                height={200}
                className="pt-10"
              />
            </div>
          </div>
          <div className="border-2 shadow-lg  border-red-600  rounded-lg hover:-translate-y-4 hover:scale-110 transition ease-in-out delay-150">
            <h1 className="text-red-600 font-bold">ULTRAMAN</h1>
            <div className="flex justify-center">
              <Image
                src="/taro.png"
                alt="taro"
                width={200}
                height={200}
                className=""
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageSection;
