import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
