import React from "react";

function Experience({ experience, setExperience }) {
  const handleChange = (index, value, field) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4 border rounded p-4">
          <input
            type="text"
            placeholder="Job Title"
            value={exp.jobTitle}
            onChange={(e) => handleChange(index, e.target.value, "jobTitle")}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleChange(index, e.target.value, "company")}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Start Date"
            value={exp.startDate}
            onChange={(e) => handleChange(index, e.target.value, "startDate")}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="End Date"
            value={exp.endDate}
            onChange={(e) => handleChange(index, e.target.value, "endDate")}
            className="border p-2 rounded w-full mb-2"
          />
          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={(e) => handleChange(index, e.target.value, "description")}
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={() => removeExperience(index)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addExperience}
        className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
      >
        Add Experience
      </button>
    </div>
  );
}

export default Experience;
