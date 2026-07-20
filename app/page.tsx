import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Concept } from "./components/Concept/Concept";
import { Gallery } from "./components/Gallery/Gallery";
import { Audience } from "./components/Audience/Audience";
import { Benefits } from "./components/Benefits/Benefits";
import { Topics } from "./components/Topics/Topics";
import { Speakers } from "./components/Speakers";
import { Venue } from "./components/Venue/Venue";
import { Expo } from "./components/Expo/Expo";
import { AfterParty } from "./components/AfterParty/AfterParty";
import { Pricing } from "./components/Pricing/Pricing";
import { Partners } from "./components/Partners/Partners";
import { Cta } from "./components/Cta/Cta";
import { RegForm } from "./components/RegForm/RegForm";
import { Footer } from "./components/Footer/Footer";

// Точка збірки лендінга. Кожен блок — окрема папка в app/components/<Block>/.

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Concept />
        <Gallery />
        <Audience />
        <Benefits />
        <Topics />
        <Speakers />
        <Expo />
        <AfterParty />
        <Pricing />
        <Venue />
        <Partners />
        <Cta />
        <RegForm />
      </main>
      <Footer />
    </>
  );
}
