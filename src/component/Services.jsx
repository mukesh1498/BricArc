import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoMdCloseCircleOutline } from "react-icons/io"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LuInstagram } from "react-icons/lu";
import ServicesSection from "./ServiceSection";
import FeedbackCarousel from "./feedback"

const projects = [
  {
    title: "EcoHarvest Business Center",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7mf5ll4w0xWp2zILhISfc2mF9xUUnXsY7w&s",
  },
  {
    title: "AquaVista Marina Build",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLaCc5LCFPliTYgUUv3Mtvleqs-7ZZtxmMA&s",
  },
  {
    title: "BioUrban Living Complex",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  },
  {
    title: "TechHaven Residences",
    img: "https://thearchitectsdiary.com/wp-content/uploads/2023/09/Commercial-Building-Design-41-jpg.webp",
  },
];

const Services = () => {
  return (
    <section className=" flex justify-center items-center h-auto ">
      <div className=" w-full bg-white rounded-xl   text-center relative">
        <header className="flex  justify-between items-center mb-6 px-10 py-5">
          <h1 className="font-bold italic text-xl">BricArch</h1>
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

        <section className="">
          <div className="relative w-[90%] mx-auto h-[60vh] ">
            <img className="absolute w-[100px] aspect-square rounded-full top-10 right-2 bg-red-600" />
            <img className="absolute w-[100px] aspect-square rounded-full bg-red-600 left-20 bottom-28" />
            <img className="absolute w-[100px] aspect-square rounded-full bg-red-600 left-1/2 bottom-20" />

            <p className="text-gray-600  absolute top-20 left-2">
              248+ PROJECTS CLOSED
            </p>
            <h2 className="text-[5rem] w-[60%] absolute top-16 right-0 font-bold leading-tight">
              Building <span className="italic">visions</span> &
            </h2>

            <h2 className="text-[5rem] w-[90%] absolute top-38 right-0 font-bold leading-tight">
              creating <span className="italic">reality</span> with BricArch
            </h2>
            <p className="  absolute bottom-10 right-10  text-center text-gray-600 mt-4  text-[1.5rem] max-w-[60%] mx-auto">
              About us. We are a futuristic construction company focused on
              innovative technologies and sustainability.
            </p>
          </div>

          <div className="w-full gap-6 items-center  flex flex-col">
            <button className="bg-black w-fit cursor-pointer hover:shadow-md text-white px-6 py-3 rounded-full flex items-center gap-2">
              START A PROJECT <span>&rarr;</span>
            </button>
          </div>
        </section>

        <main className="my-10 py-10 bg-gray-200 flex justify-center items-center ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            // pagination={{ clickable: true }}
            className="mt-8 h-92   "
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className=" h-full  rounded-xl shadow-lg cursor-pointer overflow-hidden group"
              >
                <div className="relative py-2 rounded-xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl transition duration-300 group-hover:brightness-50"
                  />
                  <button
                    className="absolute top-3 left-3 bg-white px-4 py-2 rounded-full text-sm shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300"

                  >
                    LEARN DETAILS
                  </button>
                  <div
                    className="absolute bottom-10 left-3 bg-white px-4 py-2 rounded-full text-md font-bold shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300"

                  >
                    {project.title}

                  </div>

                  <div
                    className="absolute bottom-10 right-3 flex flex-col text-white  px-4 py-2 rounded-full text-md font-bold shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300"

                  >
                    <LuInstagram />

                    <IoMdCloseCircleOutline />

                  </div>

                </div>
                <div className="absolute bottom-0 w-full bg-white ">
                  <h3 className="text-lg font-bold italic">
                    {project.title.split(" ")[0]}
                  </h3>
                  <p className="text-gray-700">
                    {project.title.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>

      <ServicesSection/>
      <FeedbackCarousel/>
      </div>




    </section>
  );
};

export default Services;
