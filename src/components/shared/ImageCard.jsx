import React from "react";

const ImageCard = ({ project }) => {
  return (
    <a href={project.link} target="_blank">
      <div className="border border-blue w-[300px]  rounded-md">
        <img
          src={project.imglink}
          className="w-full h-[180px] rounded-t-md object-cover border-b border-black hover:scale-90 hover:object-contain transition-all"
          alt="project img "
        />

        <div className="p-6 bg-[#f5ebe0] rounded-b-md flex flex-col gap-4 ">
          <p className=" text-black font-sans font-bold">{project.title} </p>
          <p className=" text-black font-opensans ">{project.technologies}</p>
        </div>
      </div>
    </a>
  );
};

export default ImageCard;
