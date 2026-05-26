import Hero from "../components/Hero";
import StoryPullQuote from "../components/StoryPullQuote";
import Pillars from "../components/Pillars";
import MultiSensory from "../components/MultiSensory";
import HowItWorks from "../components/HowItWorks";
import PageAnatomy from "../components/PageAnatomy";
import InsideBook1 from "../components/InsideBook1";
import OperationScene from "../components/OperationScene";
import Personas from "../components/Personas";
import Catalogue from "../components/Catalogue";
import Ecosystem from "../components/Ecosystem";
import InsideTheApp from "../components/InsideTheApp";
import Author from "../components/Author";
import Specs from "../components/Specs";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <StoryPullQuote />
      <Pillars />
      <MultiSensory />
      <HowItWorks />
      <PageAnatomy />
      <InsideBook1 />
      <OperationScene />
      <Personas />
      <Catalogue />
      <Ecosystem />
      <InsideTheApp />
      <Author />
      <Specs />
      <FAQ />
      <CTA />
      <SiteFooter />
    </main>
  );
}
