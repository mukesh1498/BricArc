import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gray-200 flex justify-center items-center min-h-screen p-6">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-8 text-center relative">
        <header className="flex justify-between items-center mb-6">
          <h1 className="font-bold italic text-xl">NexArch</h1>
          <nav className="flex gap-4">
            <button className="p-2 bg-gray-100 rounded-full shadow">
              <FaFacebook className="text-black" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full shadow">
              <FaYoutube className="text-black" />
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full shadow">
              MENU
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-full shadow">
              CONTACT US
            </button>
          </nav>
        </header>
        <p className="text-gray-600 mb-4">248+ PROJECTS CLOSED</p>
        <h2 className="text-5xl font-bold leading-tight">
          Building <span className="italic">visions</span> & creating{" "}
          <span className="italic">reality</span> with NexArch
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          About us. We are a futuristic construction company focused on
          innovative technologies and sustainability.
        </p>
        <div className="mt-6 flex justify-center items-center gap-4 relative">
          <div className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-lg absolute -left-20 top-1/2 transform -translate-y-1/2">
            <img
              src="/path-to-image1.jpg"
              alt="Project"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2">
            START A PROJECT <span>&rarr;</span>
          </button>
          <div className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-lg absolute -right-20 top-1/2 transform -translate-y-1/2">
            <img
              src="/path-to-image2.jpg"
              alt="Project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
