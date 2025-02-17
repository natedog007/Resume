import React, { useRef, useState } from "react";
import ResumeForm from "./components/ResumeForm";
import { useReactToPrint } from "react-to-print";

function App() {
  const [resumeData, setResumeData] = useState({});
  const previewRef = useRef();

  // Prints PDF
  const handlePrint = useReactToPrint({
    content: () => {
      console.log("previewRef.current:", previewRef.current);
      return previewRef.current;
    },
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center">Resume Builder</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <ResumeForm onUpdate={setResumeData} />
        <ResumePreview ref={previewRef} data={resumeData} />
      </div>
      <button
        onClick={handlePrint}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>
    </div>
  );
}

export default App;
