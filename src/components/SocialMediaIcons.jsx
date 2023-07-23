import React from "react";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
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
    <div className=" flex justify-center md:justify-start my-6 xs:my-10 gap-7">
      <SocialMedia
        href={"https://www.linkedin.com/in/abdul-rehman-khan-555a50247"}
        alt={"linkedin-link"}
        src={linkedin}
      />
      <SocialMedia
        href={"https://twitter.com/durrani1215"}
        alt={"twitter -link"}
        src={twitter}
      />
      <SocialMedia
        href={"https://www.facebook.com/durranishahzada.durrani/"}
        alt={"facebook-link"}
        src={facebook}
      />
      <SocialMedia
        href={"https://www.instagram.com/abdulrehman_khan_durrani/"}
        alt={"instagram-link"}
        src={instagram}
      />
    </div>
  );
};

export default SocialMediaIcons;
