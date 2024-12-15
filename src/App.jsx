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
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
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
