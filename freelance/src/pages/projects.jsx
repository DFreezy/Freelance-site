import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Podcast App",
      tools: "React.js, CSS",
      image: "/podcast.png",
      link: "https://curious-haupia-31b17c.netlify.app",
    },
    {
        title: "Attraction calculator",
        tools: "Javascript, CSS, HTML",
        image: "/Attraction.png",
        link: "attraction-calculator.netlify.app",
    },
    {
        title: "Kanban to-do app",
        tools: "Javascript, HTML, CSS",
        image: "/todo.png",
        link: "https://nimble-gecko-238ea9.netlify.app/",
    }
  ];

  return (
    <div>
        <h1 className="z-10 font-serif, text-center, font-bold bg-black text-white">Projects</h1>
    <div
      className="flex justify-center items-center min-h-screen p-6 relative"
      style={{
        backgroundImage: "url('/background-project.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-lg text-white"
          >
            <h1 className="text-2xl font-semibold text-center mb-2">{project.title}</h1>
            <h2 className="text-lg text-gray-400 text-center mb-4">Tools: {project.tools}</h2>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <img
                alt={project.title}
                src={project.image}
                className="w-full h-60 object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
