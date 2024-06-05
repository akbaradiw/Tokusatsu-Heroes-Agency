import Image from "next/image";
import Introduction from "./components/introduction/page";
import About from "./components/about/page";

export default function Home() {
  return (
    <main>
      <Introduction />
      <About />
    </main>
  );
}
