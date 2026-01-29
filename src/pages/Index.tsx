import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollSection } from "@/components/ScrollSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollSection zIndex={60} className="sticky top-0">
        <Hero />
      </ScrollSection>
      <ScrollSection zIndex={50} className="relative">
        <Services />
      </ScrollSection>
      <ScrollSection zIndex={40} className="relative">
        <About />
      </ScrollSection>
      <ScrollSection zIndex={30} className="relative">
        <Projects />
      </ScrollSection>
      <ScrollSection zIndex={20} className="relative">
        <Contact />
      </ScrollSection>
      <ScrollSection zIndex={10} className="relative">
        <Footer />
      </ScrollSection>
    </div>
  );
};

export default Index;
