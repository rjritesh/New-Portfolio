import React from "react";
import MovingSkills from "./MovingSkills";

const AboutExperience = () => {
  const skills = [
    // Frontend
    "React.js",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",

    // Backend (MERN)
    "Node.js",
    "Express.js",
    "MongoDB",

    // Database & APIs
    "SQL",
    "REST APIs",

    // Tools
    "Postman",
    "Git",
    "GitHub",
    "Firebase",
    "Figma",
    "VS Code"
  ];


  return (
    <section
      id="about"
      className="bg-gray-100 text-black py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >

      <MovingSkills />

      <div className="flex flex-col md:flex-row w-full max-w-8xl gap-6">
        {/* About Me Card */}
        <div className="bg-white shadow-lg rounded-lg p-5 w-full md:w-1/2 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-700 mb-4 sm:mb-6">About Me</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-7">
            I’m a B.Tech Computer Science graduate from{" "}
            <span className="font-semibold text-gray-800">
              MAKAUT, West Bengal
            </span>{" "}
            and a Frontend Developer working on enterprise-level digital products.
            My work spans web and mobile applications, where I focus on building
            responsive interfaces, reusable components, API integrations, and
            intuitive product experiences.
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-7 mt-1 mb-4">
            I enjoy turning ideas and product requirements into clean, practical
            solutions while continuously exploring modern technologies across the
            frontend and full-stack ecosystem.
          </p>
          {/* Skills Capsules */}
          <h3 className="text-md font-bold text-gray-700 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="border border-[rgb(33,150,243)] text-[rgb(33,150,243)] px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium hover:bg-[#41474b] hover:text-white transition cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Card */}
        <div className="bg-white shadow-lg rounded-lg p-5 w-full md:w-1/2 mt-6 md:mt-0">
          <h3 className="text-2xl font-bold text-gray-700 mb-4 sm:mb-6">Experience</h3>

          <div className="text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                MyProlist{" "}
                <span className="text-sm text-gray-500">| Nov 2025 – Present | Kolkata</span>
              </h4>
              <p className="mt-1 text-sm sm:text-base">
                <span className="font-semibold">Frontend Developer - </span> I build and contribute to enterprise-level products across web, mobile, and full-stack applications, turning ideas and requirements into reliable, intuitive, and scalable digital experiences.
              </p>

            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Cut Edge Technology Pvt. Ltd.{" "}
                <span className="text-sm text-gray-500">| Sep 2025 - Oct 2025</span>
              </h4>
              <p className="mt-1 text-sm sm:text-base">
                <span className="font-semibold">Web Developer Intern</span> — Built 5+ responsive pages using{" "}
                <span className="font-medium text-gray-800">React.js</span> and{" "}
                <span className="font-medium text-gray-800">Tailwind CSS</span>. Developed reusable components and optimized performance, improving page load speed by 15%.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-3 sm:pt-4">
              <h4 className="font-semibold text-lg text-gray-800">
                Zidio Development Pvt. Ltd.{" "}
                <span className="text-sm text-gray-500">| Feb 2025 - May 2025</span>
              </h4>
              <p className="mt-1 text-sm sm:text-base">
                <span className="font-semibold">Frontend Developer Intern</span> — Contributed to a task management web app using{" "}
                <span className="font-medium text-gray-800">React.js</span> and{" "}
                <span className="font-medium text-gray-800">Tailwind CSS</span>. Built modular components, created a custom hook, and supported UI/UX improvements.
              </p>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutExperience;
