"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Introduction = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (

    
    <section className="xl:p-20 p-5 border-b-4   border-red-600">
     <div className=" pt-10  md:mb-4 grid md:grid-cols-2 md:gap-10 ">
        <Image
          src="/alltokuatsu.png"
          alt="Hero Image"
          width={740}
          height={400}
          className="mt-10 lg:mt-0 "
          data-aos="fade-down"
          data-aos-duration="1000"
        />

        <div className=" pt-14 ">
          <h1
            className="  lg:text-2xl text-center lg:mb-6 shadow-md font-extrabold border-none bg-red-600 rounded-md py-1 px-1 text-white "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            TOKUSATSU HEROES AGENCY
          </h1>
          <p
            class="lg:mb-6  lg:text-lg text-sm pt-6 pb-3 "
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            Call us if you in dangerous. Kami menyediakan Kamen Riders, Super
            Sentai, Ultraman, & Metal Heroes untuk meminjamkan kekuatannya guna
            membantu kalian ketika sedang dalam keadaan bahaya. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam
            nisl, nec euismod nisl nisl eu nisl. Sed euismod, nisl nec ultricies
            lacinia, nisl nisl aliquam nisl, nec euismod nisl nisl eu nisl.
            危険な場合はお電話ください。私たちは、あなたの夢をかなえるために、仮面ライダー、スーパー戦隊、ウルトラマン、メタルヒーローたちを応援しています。
            良い顧客サービスを提供することは重要ですが、それは良い仕事ですが、良い仕事です
          </p>

          <Link
            href="/heroes"
            className="inline-flex  items-center shadow-md lg:justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            data-aos="flip-up"
            data-aos-duration="5000"
          >
            Choose Our Heroes
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              data-aos="fade-down"
              data-aos-duration="4000"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Introduction;
