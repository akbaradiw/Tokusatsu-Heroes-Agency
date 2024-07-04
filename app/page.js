import Image from "next/image";
import Introduction from "./components/introduction/introduction";
import ImageSection from "./components/image/image";
import About from "./components/about/about";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className="scroll-smooth focus:scroll-auto">
      <Introduction />
      <ImageSection />
      <About />
      <Footer />
    </main>
  );
}
