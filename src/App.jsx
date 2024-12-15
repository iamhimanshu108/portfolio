import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

const App = () => {


  return (
    <div className="overflow-x-hidden text-stone-300 antialiased ">
      <div className="fixed inset-0 -z-10">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-8"></div>
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}
export default App
