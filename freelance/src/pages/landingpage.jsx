import React from 'react';

export default function Landingpage() {
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
          </div>

          {/* Mobile Development */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg">
            <img alt="cellphone" src="/phone_14_01.jpg" className="w-24 h-24 rounded-full mb-3" />
            <h1 className="text-xl font-semibold">Mobile Development</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
