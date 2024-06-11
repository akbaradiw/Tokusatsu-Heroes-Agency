import Image from "next/image";
import Introduction from "./components/introduction/page";
import ImageSection from "./components/image/page";
import About from "./components/about/page";

export default function Home() {
  return (
    <main>
      <Introduction />
      <ImageSection />
      <About />
    </main>
  );
}
