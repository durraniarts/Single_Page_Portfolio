import React, { useRef } from "react";

const Scroll = ({ direction, reverse }) => {
  return (
    <div className={`flex ${reverse}`}>
      <div
        className={`flex w-fit gap-32 sm:gap-60  slider-content-${direction}  items-center pl-32 sm:pl-60`}
      >
        <div className="flex  gap-32 sm:gap-60 min-w-max   ">
          <img src="/assets/js.svg" className=" h-12 sm:h-16" />
          <img src="/assets/ts.svg" className=" h-12 sm:h-16" />
          <img src="/assets/python.svg" className=" h-12 sm:h-16" />
          <img src="/assets/react.svg" className=" h-12 sm:h-16" />
          <img src="/assets/mongo.svg" className=" h-12 sm:h-16" />
          <img src="/assets/node.svg" className=" h-12 sm:h-16" />
          <img src="/assets/tailwind.svg" className=" h-12 sm:h-16" />
          <img src="/assets/nextjs.svg" className=" h-12 sm:h-16" />
        </div>
        <div className="flex  gap-32 sm:gap-60 min-w-max ">
          <img src="/assets/js.svg" className=" h-12 sm:h-16" />
          <img src="/assets/ts.svg" className=" h-12 sm:h-16" />
          <img src="/assets/python.svg" className=" h-12 sm:h-16" />
          <img src="/assets/react.svg" className=" h-12 sm:h-16" />
          <img src="/assets/mongo.svg" className=" h-12 sm:h-16" />
          <img src="/assets/node.svg" className=" h-12 sm:h-16" />
          <img src="/assets/tailwind.svg" className=" h-12 sm:h-16" />
          <img src="/assets/nextjs.svg" className=" h-12 sm:h-16" />
        </div>
      </div>
      <div
        className={`flex w-fit gap-32 sm:gap-60  slider-content-${direction} items-center pl-32 sm:pl-60`}
      >
        <div className="flex  gap-32 sm:gap-60 min-w-max   ">
          <img src="/assets/js.svg" className=" h-12 sm:h-16" />
          <img src="/assets/ts.svg" className=" h-12 sm:h-16" />
          <img src="/assets/python.svg" className=" h-12 sm:h-16" />
          <img src="/assets/react.svg" className=" h-12 sm:h-16" />
          <img src="/assets/mongo.svg" className=" h-12 sm:h-16" />
          <img src="/assets/node.svg" className=" h-12 sm:h-16" />
          <img src="/assets/tailwind.svg" className=" h-12 sm:h-16" />
          <img src="/assets/nextjs.svg" className=" h-12 sm:h-16" />
        </div>
        <div className="flex gap-32 sm:gap-60 min-w-max ">
          <img src="/assets/js.svg" className=" h-12 sm:h-16" />
          <img src="/assets/ts.svg" className=" h-12 sm:h-16" />
          <img src="/assets/python.svg" className=" h-12 sm:h-16" />
          <img src="/assets/react.svg" className=" h-12 sm:h-16" />
          <img src="/assets/mongo.svg" className=" h-12 sm:h-16" />
          <img src="/assets/node.svg" className=" h-12 sm:h-16" />
          <img src="/assets/tailwind.svg" className=" h-12 sm:h-16" />
          <img src="/assets/nextjs.svg" className=" h-12 sm:h-16" />
        </div>
      </div>
    </div>
  );
};

const FloatingIcons = () => {
  const ref = useRef();
  // console.log(ref.current);
  return (
    <div className="bg-[#f1faee] h-[250px] sm:h-[350px] w-full flex flex-col  justify-center gap-10 sm:gap-16  select-none overflow-hidden  ">
      <Scroll direction="left" />
      <Scroll direction="right " reverse="flex-row-reverse" />
    </div>
  );
};

export default FloatingIcons;
