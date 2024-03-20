import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ConvertPDF from "./pages/ConvertPDF.jsx";
import CompressPDF from "./pages/CompressPDF.jsx";
import OcrPDF from "./pages/OcrPDF.jsx";
import LinearizePDF from "./pages/LinearizePDF.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/convertPDF" element={<ConvertPDF />} />
      <Route path="/compressPDF"element={<CompressPDF />} />
      <Route path="/ocrPDF" element={<OcrPDF />}/>
      <Route path="/linearizePDF" element={<LinearizePDF />} />
    </Routes>
  );
}

export default App;
