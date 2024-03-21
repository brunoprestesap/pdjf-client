import React from "react";

const Card = ({title, description, icon}) => {
  return (
    <div className="border-2 w-56 p-5 h-56 rounded-lg shadow-md shadow-[#aec3b0] border-[#aec3b0] flex flex-col items-center">
      {icon}
      <h1 className="mt-5 text-[#eff6e0] font-bold text-center">{title}</h1>
      <p className="m-2 text-[#eff6e0]">
        {description}
      </p>
    </div>
  );
};

export default Card;
