import React from "react";

const Card = ({title, description, icon}) => {
  return (
    <div className="border-2 mb-2 md:m-5 p-2 md:p-5 h-36 md:h-56 w-52 md:w-56 rounded-lg bg-slate-800 border-slate-700 flex flex-col items-center justify-center content-between">
      {icon}
      <h1 className="mt-5 text-[#eff6e0] text-sm md:text-lg font-bold text-center">{title}</h1>
      <p className="m-2 text-[#eff6e0] text-xs">
        {description}
      </p>
    </div>
  );
};

export default Card;
