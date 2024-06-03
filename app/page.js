import Image from "next/image";
import HeroSection from "./components/hero/page";
import About from "./components/about/page";
import Testimonial from "./components/testimonial/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Testimonial />
    </main>
  );
}
