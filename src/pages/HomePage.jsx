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
    <div className="bg-[#01161e] w-full h-screen flex justify-center items-center">
      <div className="p-5 w-5/6 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-4 m-5">
          <FaFilePdf size="90" color="#aec3b0" />
          <h1 className="text-[#aec3b0] text-6xl text-center font-bold mb-5">
            PDF96 - Ferramentas para PDF
          </h1>
        </div>
        <div className="gap-5 grid grid-cols-4 p-5">
          <Link to="/convertPDF">
            <Card
              title="Converter para Word"
              description="Exportar um arquivo PDF para um arquivo Word (DOCX)."
              icon={<FaRegFileWord size={50} className="text-slate-200" />}
            />
          </Link>

          <Link to="/compressPDF">
            <Card
              title="Otimizar PDF"
              description="Compactar PDF reduzindo o tamanho do arquivo PDF"
              icon={<FaFilePdf size={50} className="text-slate-200" />}
            />
          </Link>

          <Link to="/ocrPDF">
            <Card
              title="OCR PDF"
              description="Exportar um arquivo PDF para um arquivo Word (DOCX)."
              icon={<FaMagnifyingGlass size={50} className="text-slate-200" />}
            />
          </Link>

          <Link to="/linearizePDF">
            <Card
              title="Linearizar PDF"
              description="Otimizar PDF para a WEB."
              icon={<FaSafari size={50} className="text-slate-200" />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
