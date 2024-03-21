import React from "react";
import DragAndDrop from "../components/DragAndDrop";
import { FaSafari } from "react-icons/fa6";

const LinearizePDF = () => {
  return (
    <div className="bg-[#01161e] w-full h-screen flex flex-col items-center justify-center">
      <div className="text-center m-5 flex flex-col items-center">
        <FaSafari size={50} className="text-slate-200" />
        <h1 className="text-slate-300 text-4xl">
          Linearize PDF - Otimize PDF para web
        </h1>
        <p className="text-slate-300 text-xs m-3 w-3/6 text-center">
          Esta ferramenta não armazena seus arquivos em sua infraestrutura,
          apenas os processa para entregá-los da forma que você precisa.
        </p>
      </div>
      <DragAndDrop endpoint="http://localhost:3000/linearize" ext="pdf" />
      <div className="text-center m-5">
        <p className="text-slate-300 font-semibold">
          Problemas? Registro um e-sosti para a CSTI
        </p>
      </div>
    </div>
  );
};

export default LinearizePDF;
