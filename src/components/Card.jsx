import React from "react";

const Card = ({title, description, icon}) => {
  return (
    <div className="w-56 p-5 h-46 rounded-lg shadow-sm shadow-slate-300 flex flex-col items-center">
      {icon}
      <h1 className="mt-5 text-[#eff6e0] font-bold text-center">{title}</h1>
      <p className="m-2 text-[#eff6e0]">
        {description}
      </p>
    </div>
  );
};

export default Card;
