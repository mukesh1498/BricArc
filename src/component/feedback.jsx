import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const feedbacks = [
  {
    id: 1,
    name: "Jeremy",
    role: "Manager from LA",
    feedback:
      "NexArch exceeded my expectations! We commissioned them to design and build a sustainable home for our family and the result was amazing. They implemented advanced smart home technology, integrated a solar panel system and created green areas around the house.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Helen",
    role: "City Mayor",
    feedback:
      "NexArch is truly the company of the future. We collaborated with them on several green city projects, and the results have always been spectacular.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael",
    role: "Entrepreneur",
    feedback:
      "Working with NexArch was a pleasure. They provided us with innovative solutions to reduce energy costs while ensuring an aesthetically pleasing design.",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];

const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle feedback

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto py-10">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-6">
        Recent <i>feedback</i> from our clients
      </h2>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center border rounded-full bg-white shadow-md hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center border rounded-full bg-black text-white shadow-md hover:bg-gray-800"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Feedback Cards */}
      <div className="relative flex gap-6">
        {feedbacks.map((item, index) => (
          <div
            key={item.id}
            className={`p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out max-w-sm flex flex-col items-center text-center
              ${index === currentIndex ? "scale-110 bg-white" : "scale-95 bg-gray-100"}
            `}
            style={{ minWidth: "400px" }}
          >
            <p className="text-gray-800 text-sm mb-4">{item.feedback}</p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <h4 className="text-md font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackCarousel;
