import React, { useEffect, useState } from "react";
import axios from "axios";

const ConvertPdf = () => {
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [loading]);

  const submitPDF = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
    setLoading(!loading);
    const result = await axios.post("http://localhost:3000/export", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: 'blob'
    });
    setLoading(!loading);
    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file.name+'.docx');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div>
      <h1>{loading ? "Carregando" : "Aguardando envio"}</h1>
      <form
        className="flex flex-col items-center gap-5"
        action="/profile"
        method="post"
        encType="multipart/form-data"
        onSubmit={submitPDF}
      >
        <input
          type="file"
          name="file"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          className="border border-2 p-3 rounded-lg bg-slate-700 text-white"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ConvertPdf;
