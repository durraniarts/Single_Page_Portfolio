import React from "react";

const Sticky = ({ skill }) => {
  return (
    <div className={`flex border w-max p-2 rounded-md border-red `}>
      <p>{skill}</p>
    </div>
  );
};

const Card = ({ skills, title }) => {
  return (
    <div className="border flex flex-col flex-grow min-w-[300px] gap-5 p-5 border-zinc-700 rounded-md bg-opaque-black">
      <h3 className=" font-opensans text-yellow font-black sm:text-lg text-md">
        {title.toUpperCase()}
      </h3>
      <div className="flex  gap-2 flex-wrap ">
        {skills.map((skill) => (
          <Sticky key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Card;
