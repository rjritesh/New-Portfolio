import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="bg-gray-100 text-black py-8 mt-20 w-full flex flex-col items-center border-t border-gray-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Name */}
      <p className="text-3xl sm:text-4xl text-gray-700 mb-4 sm:mb-8">Ritesh</p>

      {/* Footer Nav Links */}
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 text-gray-500 text-base sm:text-lg">
        <a href="#home" className="hover:text-[rgb(33,150,243)]">Home</a>
        <a href="#about" className="hover:text-[rgb(33,150,243)]">About Me</a>
        <a href="#project" className="hover:text-[rgb(33,150,243)]">Projects</a>
        <a href="#contact" className="hover:text-[rgb(33,150,243)]">Contact</a>
      </nav>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
        <a
          href="https://github.com/rjritesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(33,150,243)] hover:text-[#41474b] transition text-2xl"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jhariteshkumar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(33,150,243)] hover:text-[#41474b] transition text-2xl"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:imrjha07@gmail.com"
          className="text-[rgb(33,150,243)] hover:text-[#41474b] transition text-2xl"
          title="Email"
        >
          <MdOutlineMail />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm text-center px-4">
        &copy; {new Date().getFullYear()} Ritesh Kumar Jha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
