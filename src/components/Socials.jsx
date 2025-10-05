import { Linkedin, Github, Mail } from "lucide-react";

const Socials = () => {
  return (
    <div className="fixed top-1/2 right-1 transform -translate-y-1/2 flex flex-col gap-4 z-50
                    hidden md:flex">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jhariteshkumar/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition"
      >
        <Linkedin size={24} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/rjritesh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition"
      >
        <Github size={24} />
      </a>

      {/* Mail */}
      <a
        href="mailto:imrjha07@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default Socials;
