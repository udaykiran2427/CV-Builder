import React from "react";

function Education({ education, setEducation }) {
  const handleChange = (index, value, field) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };
  const addEducation = () => {
    setEducation([...education, { degree: "", institution: "", year: "" }]);
  };
  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4 border rounded p-4">
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e.target.value, "degree")}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => handleChange(index, e.target.value, "institution")}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Year of Graduation"
            value={edu.year}
            onChange={(e) => handleChange(index, e.target.value, "year")}
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={() => removeEducation(index)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addEducation}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Education
      </button>
    </div>
  );
}

export default Education;
