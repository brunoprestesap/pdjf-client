import axios from "axios";
import React, { useState } from "react";

const OcrPDF = () => {
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const ocrPDF = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    setLoading(!loading);

    const result = await axios.post("http://localhost:3000/ocr", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    });

    setLoading(!loading);

    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement("a");
    link.href = url;
    const fileName = file.name;
    const newFileName = fileName.slice(0, fileName.length - 4);
    link.setAttribute("download", newFileName + ".pdf");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col w-3/6">
        <div className="flex justify-center">
          <h1>{loading ? "Carregando" : "Aguardando envio"}</h1>
        </div>
        <div className="w-full border border-3 flex flex-col justify-center items-center border-dashed border-gray-700 p-5">
          <h1>OCR PDF</h1>
          <form
            className="flex flex-col items-center gap-5"
            method="post"
            encType="multipart/form-data"
            onSubmit={ocrPDF}
          >
            <input
              type="file"
              name="file"
              accept="application/pdf"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button
              className="border-2 p-3 rounded-lg bg-slate-700 text-white"
              type="submit"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OcrPDF;
