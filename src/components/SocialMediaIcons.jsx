import React from "react";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.png";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
const SocialMedia = ({ href, alt, src }) => {
  return (
    <a
      className="hover:opacity-50 transition duration-500"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img alt={alt} src={src} />
    </a>
  );
};

const SocialMediaIcons = () => {
  return (
    <div className=" flex justify-center md:justify-start my-6  gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href={"https://www.linkedin.com/in/abdul-rehman-khan-555a50247"}
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin width={32} height={32} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href={"https://twitter.com/durrani1215"}
        target="_blank"
        rel="noreferrer"
      >
        <Twitter width={32} height={32} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href={"https://github.com/durraniarts"}
        target="_blank"
        rel="noreferrer"
      >
        <Github width={32} height={32} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href={"https://www.instagram.com/abdulrehman_khan_durrani/"}
        target="_blank"
        rel="noreferrer"
      >
        <Instagram width={32} height={32} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
