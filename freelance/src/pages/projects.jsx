import React from "react";

export default function Projects() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
        <h1 className="text-2xl font-semibold text-center mb-2">Podcast App</h1>
        <h2 className="text-lg text-gray-400 text-center mb-4">
          Tools: React.js, CSS
        </h2>
        <a
          href="https://curious-haupia-31b17c.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            alt="Podcast App"
            src="/podcast.png" 
            className="w-full h-60 object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105"
          />
        </a>
      </div>
    </div>
  );
}
