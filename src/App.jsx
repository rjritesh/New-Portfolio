import AboutExperience from "./components/AboutExperience";
import Footer from "./components/Footer";
// import About from "./components/AboutExperience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="bg-gray-100 text-white font-sans">
      <Hero />
      <Socials></Socials>
      <AboutExperience></AboutExperience>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
