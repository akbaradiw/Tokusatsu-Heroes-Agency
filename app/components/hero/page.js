import Image from "next/image";

const HeroSection = () => {
  return (
    <section className=" py-16 border-b-4  border-red-600">
      <div className="container flex justify-space-between mx-auto pt-10">
        <Image
          src="/d417got-de332d28-2d89-4abe-9371-fa8b721e140f.png"
          alt="Hero Image"
          width={400}
          height={400}
          className="w-1/2 h-auto pe-20 hover:-translate-y-4 hover:scale-110 transition ease-in-out delay-150"
        />
        <div className="ms-20 border rounded-lg py-5 px-5 shadow-md ">
          <h1 class=" text-3xl text-center mb-6 font-extrabold border-none bg-red-600 rounded-md py-1 px-1 text-white ">TOKUSATSU HERO AGENCY</h1>
          <p class="mb-6 text-lg f">
            Call us if you in dangerous. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl
            aliquam nisl, nec euismod nisl nisl eu nisl. Sed euismod, nisl nec
            ultricies lacinia, nisl nisl aliquam nisl, nec euismod nisl nisl eu
            nisl. 良い顧客サービスを提供することは重要ですが、それは良い仕事ですが、良い仕事です
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Learn more
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

export default HeroSection;
