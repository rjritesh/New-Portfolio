import AboutExperience from "./components/AboutExperience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
// import About from "./components/AboutExperience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="site-shell font-sans">
      <Hero />
      <Socials></Socials>
      <AboutExperience></AboutExperience>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
