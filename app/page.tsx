import { Contact } from "@/components/Contact";
import { EmergencyCta } from "@/components/EmergencyCta";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LandlordHmo } from "@/components/LandlordHmo";
import { MediaProof } from "@/components/MediaProof";
import { Pricing } from "@/components/Pricing";
import { ProjectCards } from "@/components/ProjectCards";
import { RepairRequest } from "@/components/RepairRequest";
import { RepairTrackerPreview } from "@/components/RepairTrackerPreview";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUsPanel } from "@/components/WhyChooseUsPanel";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MediaProof />
        <Services />
        <WhyChooseUsPanel />
        <LandlordHmo />
        <EmergencyCta />
        <RepairRequest />
        <RepairTrackerPreview />
        <ProjectCards />
        <Testimonials />
        <GoogleReviews />
        <Pricing />
        <Faq />
        <ServiceAreaMap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
