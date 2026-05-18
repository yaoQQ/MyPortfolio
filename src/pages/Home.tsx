import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg font-noto">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  );
}
