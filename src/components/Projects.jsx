import { CiPlay1 } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiRedux, SiNextdotjs, SiTensorflow, SiJavascript, SiHtml5, SiCss3, SiChakraui } from "react-icons/si";
import ZaikaImg from "../assets/zaika.png"
import cineo from "../assets/cineo.png"
import vision from "../assets/vision.png"
import currency from "../assets/CURRENCY.png"
import multicalci from "../assets/multicalci.png"

const projects = [
  {
    title: "Cineo",
    description:
      "AI-powered movie recommendation platform with smooth navigation and optimized performance using Redux Toolkit and Firebase.",
    tech: ["React.js", "JavaScript", "Redux Toolkit", "TailwindCSS", "Firebase", "Gemini AI", "TMDB API"],
    github: "https://github.com/rjritesh/Cineo-",
    live: "https://cineo-alpha.vercel.app/",
    image: cineo,
  },
  {
    title: "Zaika",
    description:
      "Food delivery app with real-time menus, Redux Toolkit cart, and smooth UX including shimmer loading and toast notifications.",
    tech: ["React.js", "JavaScript", "Redux Toolkit", "TailwindCSS", "REST APIs"],
    github: "https://github.com/rjritesh/Zaika---A-Food-delivery-app",
    live: "zaika-a-food-delivery-app.vercel.app",
    image: ZaikaImg,
  },
  {
    title: "Vision Pulse",
    description:
      "Real-time AI surveillance system with instant email alerts, easy setup, and responsive interface for secure monitoring.",
    tech: ["Next.js", "React.js", "TailwindCSS", "TensorFlow.js", "Nodemailer"],
    github: "https://github.com/rjritesh/VisionPulse",
    live: "https://vision-pulse.vercel.app/",
    image: vision,
  }, {
    title: "Instagram Clone",
    description:
      "Fully functional Instagram clone with authentication, posts, likes, and smooth navigation built with React.js and Firebase.",
    tech: ["React.js", "Firebase", "Chakra UI"],
    github: "https://github.com/rjritesh/InstagramClone",
    // live: "https://your-live-demo.com/instagram-clone",
    image: "https://repository-images.githubusercontent.com/465897194/2c2b436f-5b34-4252-a778-0dc359fe0306",
  },
  {
    title: "Multi Calculator",
    description:
      "Web calculator supporting basic, scientific, and BMI calculations with a clean interface built using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rjritesh/Multicalculator",
    live: "https://multicalculator-tau.vercel.app/",
    image: multicalci,
  },
  {
    title: "Currency Converter",
    description:
      "Simple web tool to convert multiple currencies in real-time, built with HTML, CSS, and JavaScript for fast results.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rjritesh/Currency-convertor",
    live: "https://zaika-a-food-delivery-app-4629.vercel.app/",
    image: currency,
  },
];

const techIcons = {
  "React.js": <FaReact className="text-[#61dafb]" />,
  "Chakra UI": <SiChakraui className="text-[#61dafb]" />,
  "JavaScript": <SiJavascript className="text-yellow-500" />,
  "Redux Toolkit": <SiRedux className="text-[#764abc]" />,
  TailwindCSS: <SiTailwindcss className="text-[#38bdf8]" />,
  Firebase: <SiFirebase className="text-[#ffa611]" />,
  "Next.js": <SiNextdotjs className="text-gray-800" />,
  "TensorFlow.js": <SiTensorflow className="text-[#ff6f00]" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  HTML: <SiHtml5 className="text-[#e34f26]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,
  "React Router": <FaReact className="text-[#61dafb]" />,

};

const Projects = () => {
  return (
    <section
      id="project"
      className="bg-gray-100 py-16 px-6 flex flex-col items-center"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden w-[290px] shadow-md border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[150px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-3 text-gray-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex gap-2 text-lg">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 p-1 rounded-md hover:bg-gray-100 transition"
                      title="GitHub"
                    >
                      <LuGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 p-1 rounded-md hover:bg-gray-100 transition"
                      title="Live Demo"
                    >
                      <CiPlay1 />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-snug mb-3">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    title={tech}
                    className="bg-gray-100 border border-gray-200 rounded-md p-1 flex items-center justify-center text-sm"
                  >
                    {techIcons[tech] || tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
