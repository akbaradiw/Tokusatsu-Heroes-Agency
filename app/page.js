import Image from "next/image";
import Introduction from "./components/introduction/introduction";
import ImageSection from "./components/image/image";
import About from "./components/about/about";

export default function Home() {
  return (
    <main>
      <Introduction />
      <ImageSection />
      <About />
    </main>
  );
}
