import React from "react";

const ResumePreview = React.forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className="p-4 border rounded-lg shadow-md bg-gray-100">
      <h2 className="text-xl font-bold">{data.name || "Your Name"}</h2>
      <p>{data.email || "your.email@example.com"}</p>
      <p>{data.phone || "123-456-7890"}</p>
      <hr className="my-2" />
      <h3 className="font-bold">Experience</h3>
      <p>{data.experience || "Your experience details here..."}</p>
      <h3 className="font-bold">Education</h3>
      <p>{data.education || "Your education details here..."}</p>
      <h3 className="font-bold">Skills</h3>
      <p>{data.skills || "Your skills here..."}</p>
    </div>
  );
});

export default ResumePreview;
