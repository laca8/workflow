import About from "@/components/features/About";
import Hero from "@/components/features/Hero";
import bg1 from '../public/bg1.gif'
import Skills from "@/components/features/Skills";
import Work from "@/components/features/Work";

export default function Home() {
  return (
    <div className="relative min-h-screen  flex flex-col items-center justify-center px-4 py-12  bg-no-repeat bg-cover bg-center-top  bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(19, 19, 19, 0.5), rgb(28, 26, 26)), url(${bg1.src || bg1})`,
        height: "100%",
        width: "100%",
      }}>
      <Hero />
      <About />
      <Skills />
      <Work />

    </div>
  );
}
