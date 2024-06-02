import Image from "next/image";
const About = () => {
  return (
    <div className="flex justify-around mt-6">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec euismod nisl
        </p>
      </div>
      <Image src="/sentaikick.jpg" alt="Herokick" width={400} height={400} />
    </div>
  );
};
export default About;
