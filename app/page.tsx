import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Concept } from "./components/Concept/Concept";

// Точка збірки лендінга. Кожен блок — окрема папка в app/components/<Block>/.

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Concept />
      </main>
    </>
  );
}
