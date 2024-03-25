import React from "react";
import Card from "../components/Card";
import {
  FaRegFileWord,
  FaMagnifyingGlass,
  FaFilePdf,
  FaSafari,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-[#01161e] w-full h-screen flex items-center">
      <div className="md:p-5 h-screen w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center p-5 w-full">
          <FaFilePdf size="45" md:size="90" color="#aec3b0" />
          <h1 className="text-[#aec3b0] text-xl md:text-6xl text-center font-bold md:m-3">
            PDF96 - Ferramentas para PDF
          </h1>
        </div>

        <div className="flex justify-center items-center md:w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-5">
            <Link to="/convertPDF">
              <Card
                title="Converter para Word"
                description="Exportar um arquivo PDF para um arquivo Word (DOCX)."
                icon={<FaRegFileWord size={40} className="text-slate-200" />}
              />
            </Link>

            <Link to="/compressPDF">
              <Card
                title="Otimizar PDF"
                description="Compactar PDF reduzindo o tamanho do arquivo PDF"
                icon={<FaFilePdf size={40} className="text-slate-200" />}
              />
            </Link>

            <Link to="/ocrPDF">
              <Card
                title="OCR PDF"
                description="Exportar um arquivo PDF para um arquivo Word (DOCX)."
                icon={
                  <FaMagnifyingGlass size={40} className="text-slate-200" />
                }
              />
            </Link>

            <Link to="/linearizePDF">
              <Card
                title="Linearizar PDF"
                description="Otimizar PDF para a WEB."
                icon={<FaSafari size={40} className="text-slate-200" />}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end w-full m-5 md:p-9">
          <p className="text-slate-200 text-xs">
            Desenvolvido por: Bruno Alexandre Soares Prestes
          </p>
          <p className="text-slate-200 text-xs">
            Encarregado do SETSIS/NUTEC-SJAP
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
