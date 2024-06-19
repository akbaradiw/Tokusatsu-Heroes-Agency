import Image from "next/image";
import Introduction from "./components/introduction/introduction";
import ImageSection from "./components/image/image";
import About from "./components/about/about";
import Test from "./components/test.js";

export default function Home() {
  return (
    <main>
      <Introduction />
      <ImageSection />
      <About />
      <Test />
    </main>
  );
}
