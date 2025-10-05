import React from "react";
import {
  SiReact, SiRedux, SiJavascript, SiTailwindcss, SiNextdotjs,
  SiHtml5, SiCss3, SiFirebase, SiMysql, SiGit, SiGithub, SiFigma
} from "react-icons/si";

const skillsWithIcons = [
  { name: "React.js", icon: <SiReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Figma", icon: <SiFigma /> },
  // { name: "VS Code", icon: <SiVisualstudio /> },
];

const MovingSkills = () => {
  return (
    <div className="w-full overflow-hidden mb-6 relative flex items-center">
      <div className="flex gap-3 sm:gap-6 whitespace-nowrap animate-marquee">
        {skillsWithIcons.concat(skillsWithIcons).map((skill, index) => (
          <span
            key={index}
            className="text-[rgb(33,150,243)] px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium bg-white flex items-center gap-1 sm:gap-2 transition"
          >
            {React.cloneElement(skill.icon, { size: 14 })}
            {skill.name}
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default MovingSkills;
