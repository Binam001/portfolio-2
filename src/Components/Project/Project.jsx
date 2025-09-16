import React, { useState, useEffect } from "react";
import { projectsList } from "../../constants";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setTimeout(() => setModalOpen(true), 10); // allow modal to mount first
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // match animation duration
  };

  // Reset modalOpen if modal is unmounted directly
  useEffect(() => {
    if (!selectedProject) setModalOpen(false);
  }, [selectedProject]);

  return (
    <section
      id="project"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[5vw] bg-skills-gradient project-section-clip-path"
    >
      {/* project section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* projects timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
        {/* projects entries */}
        {projectsList.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* timeline circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 visible md:invisible lg:visible">
              <img
                src={project.logo}
                alt={project.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* project lists */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } lg:ml-24 lg:mr-24 ml-8 transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
            >
              <div className="flex items-center space-x-6">
                {/* Project Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* project title, semester, date */}
                <div className="flex flex-col justify-between">
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {project.title}
                  </h4>
                </div>
              </div>

              {/* project description, skills */}
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <p className="mt-2 text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-6 md:my-10 w-full flex justify-center">
        <a
          href='https://github.com/Binam001?tab=repositories'
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
        >
          More Projects
        </a>
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050414]/50 backdrop-blur-md p-4"
          onClick={handleCloseModal}
        >
          <div
            className={`bg-gray-900 rounded-xl shadow-2xl w-[90%] h-[80%] mt-10 max-w-3xl overflow-y-scroll md:overflow-hidden relative transition-all duration-300 ease-out transform ${modalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between py-4 px-4 md:px-8">
              <h3 className="lg:text-3xl font-bold text-white text-md">
                {selectedProject.title}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-white text-base md:text-3xl font-bold hover:text-purple-500"
              >
                X
              </button>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="px-3 md:p-6 w-full md:w-[45%]">
                <p className="text-sm md:text-md text-gray-300">
                  {selectedProject.semester}
                </p>
                <p className="text-xs md:text-sm text-gray-500 my-2">
                  {selectedProject.date}
                </p>
                <p className="text-gray-400 my-3 md:my-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3 md:mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs md:font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-[55%] flex flex-col items-center bg-gray-900 px-4 mt-4">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay={false}
                    loop
                    muted
                    className="w-full h-[70%] object-cover rounded-xl"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-[70%] object-cover rounded-xl"
                  />
                )}
                <div className="my-6 md:my-10">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
