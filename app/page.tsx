import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceTimesBar from "./components/ServiceTimesBar";
import WelcomeSection from "./components/WelcomeSection";
import NextStepsGrid from "./components/NextStepsGrid";
import SermonHighlight from "./components/SermonHighlight";
import EventsSection from "./components/EventsSection";
import GiveSection from "./components/GiveSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServiceTimesBar />
        <WelcomeSection />
        <NextStepsGrid />
        <SermonHighlight />
        <EventsSection />
        <GiveSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
