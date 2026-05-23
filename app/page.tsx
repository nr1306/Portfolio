import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MeshBackground from "@/components/MeshBackground";
import GlobalTilt from "@/components/GlobalTilt";

export default function Home() {
  return (
    <>
      <MeshBackground />
      <GlobalTilt />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Timeline />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
