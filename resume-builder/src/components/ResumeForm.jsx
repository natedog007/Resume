// src/components/ResumeForm.jsx
import { useState } from 'react';

const ResumeForm = ({ onUpdate }) => {  // Accept onUpdate from props
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    skills: "",
  });
  
  const handleChange = (e) => {
    const updatedData = { ...resumeData, [e.target.name]: e.target.value }; 
    setResumeData(updatedData); // Update local state
    onUpdate(updatedData);      // Update parent state via prop
  };
  
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white w-75">
      <h2 className="text-xl font-bold mb-2">Resume Details</h2>
      {Object.keys(resumeData).map((key) => (
        <div key={key} className="mb-2">
          <label className="block text-gray-700">{key.toUpperCase()}</label>
          <input
            type="text"
            name={key}
            value={resumeData[key]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default ResumeForm;
