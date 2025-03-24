import React, { useState } from "react";
import axios from "axios";

// Reusable Modal Component
const Modal = ({ isOpen, onClose, title, type, formData, handleChange, handleSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <form onSubmit={(e) => handleSubmit(e, type)} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full">Send Email</button>
        </form>
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default function Landingpage() {
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/send-email", { ...formData, type });
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
      type === "Web Development" ? setIsAppOpen(false) : setIsMobileOpen(false);
    } catch (error) {
      alert("Failed to send email.");
      console.error(error);
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/971.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-6xl md:text-8xl font-serif">Here we do</h1>
          <h1 className="text-6xl md:text-8xl font-bold font-serif">two things</h1>
        </div>

        {/* Service Section */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Web Development */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg">
            <img alt="laptop" src="/images.jpeg" className="w-24 h-24 rounded-full mb-3" />
            <h1 className="text-xl font-semibold">Web Development</h1>
            <button onClick={() => setIsAppOpen(true)} className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">
              Get started
            </button>
          </div>

          {/* Mobile Development */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg">
            <img alt="cellphone" src="/phone_14_01.jpg" className="w-24 h-24 rounded-full mb-3" />
            <h1 className="text-xl font-semibold">Mobile Development</h1>
            <button onClick={() => setIsMobileOpen(true)} className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Web Development Modal */}
      <Modal 
        isOpen={isAppOpen} 
        onClose={() => setIsAppOpen(false)} 
        title="Web Development Inquiry" 
        type="Web Development"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* Mobile Development Modal */}
      <Modal 
        isOpen={isMobileOpen} 
        onClose={() => setIsMobileOpen(false)} 
        title="Mobile Development Inquiry" 
        type="Mobile Development"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
