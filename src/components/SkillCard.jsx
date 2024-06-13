import React from "react";

const SkillCard = ({ svgElement, skillName }) => {
  return (
    <div className="  bg-clothLightBlack flex-col size-16 md:size-32 rounded-xl md:rounded-3xl my-1 md:my-5 group flex items-center justify-center text-center relative ">
      <div className="text-3xl md:text-6xl group-hover:scale-125 transition duration-500 ease-in-out mb-5 order-1">
        {svgElement}
      </div>
      <div className="absolute font-bold text-xs md:text-xl self-center hidden bottom-2  group-hover:block transition duration-300 ease-in-out order-2">
        {skillName}
      </div>
    </div>
  );
};

export default SkillCard;
