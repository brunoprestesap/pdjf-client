import axios from "axios";
import React, { useState } from "react";

const CompressPDF = () => {
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const compressPDF = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
    setLoading(!loading);
    const result = await axios.post(
      "http://localhost:3000/compress",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      }
    );
    setLoading(!loading);
    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${file.name}_compressed.pdf`);
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
          <h1>Compress PDF</h1>
          <form
            className="flex flex-col items-center gap-5"
            method="post"
            encType="multipart/form-data"
            onSubmit={compressPDF}
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

export default CompressPDF;
