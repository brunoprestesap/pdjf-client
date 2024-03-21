import axios from "axios";
import React, { useState } from "react";

const DragAndDrop = ({ endpoint, ext }) => {
  const [text, setText] = useState(
    "Arraste o arquivo aqui ou clique para enviar"
  );

  const handleClick = (e) => {
    inputFile.click();
    inputFile.onchange = (e) => {
      upload(e.target.files[0]);
    };
  };

  const handlerDrop = async (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    // Verifica se o arquivo é um PDF
    if (file.type !== "application/pdf") {
      setText("Erro: Arquivo não é um PDF");
      throw new Error("Arquivo não é um PDF");
    }

    if (e.dataTransfer.items[0].kind !== "file") {
      setText("Não é um arquivo");
      throw new Error("Não é um arquivo");
    }

    if (e.dataTransfer.items.length > 1) {
      setText("Erro: Não é permitido arrastar mais de um arquivo");
      throw new Error("Múltiplos arquivos");
    }

    const filesArray = [...e.dataTransfer.files];

    const isFile = await new Promise((resolve) => {
      const fr = new FileReader();
      fr.onprogress = (e) => {
        if (e.loaded > 50) {
          fr.abort();
          resolve(true);
        }
      };
      fr.onload = () => {
        resolve(true);
      };
      fr.onerror = () => {
        resolve(false);
      };
      fr.readAsArrayBuffer(e.dataTransfer.files[0]);
    });

    if (!isFile) {
      setText("Erro: Não é um arquivo (Parece ser uma pasta");
      throw new Error("Couldn't read file");
    }

    upload(filesArray[0]);
  };

  const upload = async (file) => {
    const fd = new FormData();
    fd.append("file", file);

    setText("Carregando o arquivo. Aguarde...");
    const result = await axios.post(endpoint, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement("a");
    link.href = url;
    const newFileName = file.name.slice(0, file.name.length - 4);
    link.setAttribute("download", `${newFileName}.${ext}`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const handlerDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onClick={handleClick}
      onDrop={handlerDrop}
      onDragOver={handlerDragOver}
      className="bg-[#01161e] w-96 h-96 border-dashed border-cyan-500 border-4 p-12 leading-10 text-3xl flex justify-center items-center align-middle text-center"
    >
      <input
        id="inputFile"
        type="file"
        name="file"
        accept="application/pdf"
        required
        className="hidden"
      />
      <p className="text-slate-300">{text}</p>
    </div>
  );
};

export default DragAndDrop;
