"use client";
import Image from "next/image";


const Introduction = () => {
  return (
    <section className="lg:p-20 p-5 border-b-4  border-red-600">
      <div className="lg:flex lg:justify-around lg:mx-auto lg:pt-10 grid    ">
        <Image
          src="/alltokuatsu.png"
          alt="Hero Image"
          width={740}
          height={400}
          className="mt-10 lg:mt-0  hover:-translate-y-4 hover:scale-110 transition ease-in-out delay-150"
        />

        <div className="lg:ms-20 lg:ps-20 pt-14 ">
          <h1 class=" lg:text-3xl lg:ms-20 text-center lg:mb-6 font-extrabold border-none bg-red-600 rounded-md py-1 px-1 text-white ">
            TOKUSATSU HERO AGENCY
          </h1>
          <p class="lg:mb-6 lg:ms-20 lg:text-lg text-sm pt-6 pb-3 ">
            Call us if you in dangerous. Kami menyediakan Kamen Riders, Super Sentai, Ultraman, & Metal Heroes untuk meminjamkan kekuatannya guna membantu kalian. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl
            aliquam nisl, nec euismod nisl nisl eu nisl. Sed euismod, nisl nec
            ultricies lacinia, nisl nisl aliquam nisl, nec euismod nisl nisl eu
            nisl.
            危険な場合はお電話ください。私たちは、あなたの夢をかなえるために、仮面ライダー、スーパー戦隊、ウルトラマン、メタルヒーローたちを応援しています。
            良い顧客サービスを提供することは重要ですが、それは良い仕事ですが、良い仕事です
          </p>
          <a
            href="#"
            class="inline-flex lg:ms-20 items-center lg:justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Check Our Heroes
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
