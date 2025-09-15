import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export type Social = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

const Socials: React.FC = () => {
  const socials: Social[] = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sarthak-wadegaonkar/",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/SarthakWade",
    },
    {
      name: "Twitter",
      icon: <FaSquareXTwitter />,
      link: "https://x.com/Sarthak_Wade",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/sarthak_wadegaonkar/",
    },
  ];

  return (
    <div className="flex mt-4 lg:mt-6 gap-2 relative w-full items-center">
      <div className="w-full h-4 border-t-2 self-center mt-3 border-white/10"></div>
      <div className="flex">
        {socials.map((social, index) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            style={{ zIndex: 10 - index }}
            className="relative -ml-2 first:ml-0 border border-gray-400 rounded-full p-3 lg:p-4 text-white hover:bg-gray-800 transition text-sm lg:text-base"
            title={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="w-full h-4 border-t-2 self-center mt-3 border-white/10"></div>
    </div>
  );
};

export default Socials;
