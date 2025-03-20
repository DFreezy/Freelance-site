import React, {useState} from 'react';

export default function Landingpage() {
const [isAppOpen, setIsAppOpen] = useState(false)
const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/971.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-6xl md:text-8xl">Here we do</h1>
          <h1 className="text-6xl md:text-8xl font-bold">two things</h1>
        </div>

        {/* Service Section */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Web Development */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg">
            <img alt="laptop" src="/images.jpeg" className="w-24 h-24 rounded-full mb-3" />
            <h1 className="text-xl font-semibold">Web Development</h1>
            <button onClick={() => setIsAppOpen(true)} className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">Get started</button>
          {/* Modal Overlay */}
      {isAppOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p className="text-gray-600">This is a sample modal in React with TailwindCSS.</p>
            
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsAppOpen(false)}
            >
              ✖
            </button>
            
            {/* Additional Action Button */}
            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => setIsAppOpen(false)}
            >
              Got It!
            </button>
          </div>
        </div>
      )}
          </div>
          {/* Mobile Development */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg">
            <img alt="cellphone" src="/phone_14_01.jpg" className="w-24 h-24 rounded-full mb-3" />
            <h1 className="text-xl font-semibold">Mobile Development</h1>
            <button onClick={() => setIsMobileOpen(true)} className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">Get started</button>
                {/* Modal Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p className="text-gray-600">This is a sample modal in React with TailwindCSS.</p>
            
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileOpen(false)}
            >
              ✖
            </button>
            
            {/* Additional Action Button */}
            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => setIsMobileOpen(false)}
            >
              Got It!
            </button>
          </div>
        </div>
      )}
          </div>
        </div>
      </div>
    </div>
  );
}
