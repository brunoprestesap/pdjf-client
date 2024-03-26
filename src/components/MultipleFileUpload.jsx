import React, { useRef, useState } from "react";
import axios from "axios";
import { RiFileCloseLine } from "react-icons/ri";
import { IoMdCloudUpload } from "react-icons/io";
import { FaFileArrowUp } from "react-icons/fa6";

const MultipleFileUpload = ({ endpoint, ext }) => {
  const [text, setText] = useState(
    "Arraste os arquivos aqui ou clique para enviar"
  );

  const inputRef = useRef();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progress, setProgress] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("select");

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const upload = async (files) => {
    try {
      setUploadStatus("uploading");
      setText("Carregando os arquivos. Aguarde...");

      const promises = files.map((file) => {
        const fd = new FormData();
        fd.append("files", file);

        return axios.post(
          endpoint,
          fd,
          {
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setProgress((prev) => ({
                ...prev,
                [file.name]: percentCompleted,
              }));
            },
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            responseType: "blob",
          }
        );
      });

      await Promise.all(promises);

      setUploadStatus("done");
    } catch (error) {
      setUploadStatus("select");
      console.log(error);
    }
  };

  const handlerDragOver = (e) => {
    e.preventDefault();
  };

  const handlerDrop = (e) => {
    e.preventDefault();

    const filesArray = Array.from(e.dataTransfer.files);
    setSelectedFiles(filesArray);
    upload(filesArray);
  };

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFiles([]);
    setProgress([]);
    setUploadStatus("select");
  };

  return (
    <div
      onClick={onChooseFile}
      onDrop={handlerDrop}
      onDragOver={handlerDragOver}
      className="bg-[#01161e] w-96 h-96 border-dashed border-cyan-500 border-4 rounded-lg p-12 leading-10 text-3xl flex flex-col justify-center items-center align-middle text-center"
    >
      <input
        ref={inputRef}
        type="file"
        name="files"
        accept="application/pdf"
        required
        className="hidden"
        multiple
        onClick={handlerDrop}
      />

      <IoMdCloudUpload className="text-slate-200" size={60} />
      <p className="text-slate-300">{text}</p>

      {selectedFiles.length > 0 && (
        <>
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="w-80 flex justify-between items-center gap-4 text-[#000] bg-[#fff] border-1 border-solid border-slate-800 rounded-md px-2 py-4 mt-5"
            >
              <FaFileArrowUp />

              <div className="flex justify-between items-center flex-1 gap-4">
                <div className="w-full flex flex-col items-start">
                  <h6 className="flex-1 text-sm font-normal">{file.name}</h6>
                  <div className="w-full h-1 bg-slate-300 rounded-lg mt-2">
                    <div
                      className="h-1 bg-[#5d4dcc] rounded-lg transition-all"
                      style={{ width: `${progress[file.name] || 0}%` }}
                    />
                  </div>
                </div>

                <button onClick={clearFileInput}>
                  <RiFileCloseLine className="cursor-pointer" />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MultipleFileUpload;
