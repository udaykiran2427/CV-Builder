import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState([
    {
      degree: "",
      institution: "",
      year: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      projectName: "",
      projectLink: "",
      projectDescription: "",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">CV Builder</h1>
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6 flex gap-8">
        <div className="w-1/2 space-y-8">
          <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
          <Education education={education} setEducation={setEducation} />
          <Experience experience={experience} setExperience={setExperience} />
          <Projects projects={projects} setProjects={setProjects} />
        </div>

        {/* Preview */}
        <div className="w-1/2 p-6 bg-gray-50 rounded-lg border border-gray-200 overflow-auto max-h-[90vh]">
          <h2 className="text-2xl font-semibold mb-4">Resume Preview</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-600 mb-8">
              <h3 className="font-bold text-xl mb-2">
                {generalInfo.name || "Your Name"}
              </h3>
              <p>{generalInfo.email || "your.email@example.com"}</p>
              <p>+91 {generalInfo.phone || "1234567890"}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Education</h3>
              {education.length === 0 ? (
                <p className="italic text-gray-400">No education added yet.</p>
              ) : (
                education.map((edu, idx) => (
                  <div key={idx} className="mb-2">
                    <p>
                      <span className="font-semibold">
                        {edu.degree || "Degree"}
                      </span>{" "}
                      at {edu.institution || "Institution"} (
                      {edu.year || "Year"})
                    </p>
                  </div>
                ))
              )}
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Experience</h3>
              {experience.length === 0 ? (
                <p className="italic text-gray-400">No experience added yet.</p>
              ) : (
                experience.map((exp, idx) => (
                  <div key={idx} className="mb-4">
                    <p>
                      <span className="font-semibold">
                        {exp.jobTitle || "Job Title"}
                      </span>{" "}
                      at {exp.company || "Company"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {exp.startDate || "Start Date"} -{" "}
                      {exp.endDate || "End Date"}
                    </p>
                    <p>{exp.description || "Job description goes here."}</p>
                  </div>
                ))
              )}
            </div>
            {/* Projects */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Projects</h3>
              {projects.length == 0 ? (
                <p className="italic text-gray-400">No projects added yet.</p>
              ) : (
                projects.map((project, idx) => (
                  <div key={idx} className="mb-4">
                    <p>
                      <span className="font-semibold">
                        {project.projectName || "Project Name"}
                      </span>{" "}
                      -{" "}
                      <a
                        href={project.projectLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline text-sm"
                      >
                        {project.projectLink || "Project Link"}
                      </a>
                    </p>
                    <p>{project.projectDescription || "Description"}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
