import { Contact } from "@/components/Contact";
import { EmergencyCta } from "@/components/EmergencyCta";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LandlordHmo } from "@/components/LandlordHmo";
import { Pricing } from "@/components/Pricing";
import { ProjectCards } from "@/components/ProjectCards";
import { RepairRequest } from "@/components/RepairRequest";
import { RepairTrackerPreview } from "@/components/RepairTrackerPreview";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUsPanel } from "@/components/WhyChooseUsPanel";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUsPanel />
        <LandlordHmo />
        <EmergencyCta />
        <RepairRequest />
        <RepairTrackerPreview />
        <ProjectCards />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

