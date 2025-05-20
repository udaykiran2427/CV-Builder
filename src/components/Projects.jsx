import React from "react";

function Projects({ projects, setProjects }) {
  const handleChange = (index, value, field) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };
  const addProject = () => {
    setProjects([
      ...projects,
      {
        projectName: "",
        projectLink: "",
        projectDescription: "",
      },
    ]);
  };
  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      {projects.map((project, index) => {
        return (
          <div key={index} className="mb-4 border rounded p-4">
            <input
              type="text"
              placeholder="Project Name"
              value={project.projectName}
              onChange={(e) =>
                handleChange(index, e.target.value, "projectName")
              }
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              placeholder="Project Link"
              value={project.projectLink}
              onChange={(e) =>
                handleChange(index, e.target.value, "projectLink")
              }
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              placeholder="Project Description"
              value={project.projectDescription}
              onChange={(e) =>
                handleChange(index, e.target.value, "projectDescription")
              }
              className="border p-2 rounded w-full mb-2"
            />
            <button
              onClick={() => removeProject(index)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        onClick={addProject}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Project
      </button>
    </div>
  );
}

export default Projects;
