import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container flex justify-space-between mx-auto px-4">
        <Image
          src="/d417got-de332d28-2d89-4abe-9371-fa8b721e140f.png"
          alt="Hero Image"
          width={400}
          height={400}
          className="w-1/2 h-auto"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">Japanese Hero Agency</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec
            euismod nisl nisl eu nisl. Sed euismod, nisl nec ultricies lacinia,
            nisl nisl aliquam nisl, nec euismod nisl nisl eu nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
