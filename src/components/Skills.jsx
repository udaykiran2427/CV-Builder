import React from "react";

function Skills({ skills, setSkills }) {
  const handleChange = (index, value, field) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { skill: "", level: "" }]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      {skills.map((skill, index) => {
        return (
          <div key={index} className="mb-4 border rounded p-4 space-y-2">
            <input
              type="text"
              placeholder="Skill Type:"
              value={skill.type}
              onChange={(e) => handleChange(index, e.target.value, "type")}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Skill List:"
              value={skill.list}
              onChange={(e) => handleChange(index, e.target.value, "list")}
              className="border p-2 rounded w-full"
            />
            <button
              onClick={() => removeSkill(index)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        onClick={addSkill}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Skill
      </button>
    </div>
  );
}

export default Skills;
