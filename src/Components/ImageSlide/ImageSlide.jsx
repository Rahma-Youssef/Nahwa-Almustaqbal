




const projects = [
  {
    id: 1,
    title: "Interior Design",
    cover: "/images/interior/interior55.png",
    images: [
      "/images/interior/interior31.png",
      // "/images/interior/interior20.png",
      // "/images/interior/interior18.png",
      // "/images/interior/interior17.png",
      // "/images/interior/interior16.png",
      // "/images/interior/interior15.png",
      // "/images/interior/interior14.png",
      // "/images/interior/interior13.png",
      // "/images/interior/interior12.png",
      // "/images/interior/interior11.png",
      // "/images/interior/interior10.png",
      // "/images/interior/interior09.png",
      // "/images/interior/interior08.png",
      // "/images/interior/interior07.png",
      // "/images/interior/interior06.png",
      // "/images/interior/interior05.webp",
      // "/images/interior/interior04.webp",
      // "/images/interior/interior03.webp",
      // "/images/interior/interior02.webp",
      // "/images/interior/interior01.png",
    ]
  },

  {
    id: 2,
    title: "Construction",
    cover: "/images/construction/construction05.jpg",
    images: [
      "/images/construction/construction01.jpg",
      // "/images/construction/construction02.jpg",
      // "/images/construction/construction03.jpg",
      // "/images/construction/construction04.jpg",
      // "/images/construction/construction05.jpg",
      // "/images/construction/construction06.jpg",
      // "/images/construction/construction07.jpeg",
      // "/images/construction/construction08.jpeg",
      // "/images/construction/construction09.jpeg",
      // "/images/construction/construction10.jpeg",
      // "/images/construction/construction11.jpeg",
      // "/images/construction/construction12.jpeg",
      // "/images/construction/construction13.jpeg",
      // "/images/construction/construction14.jpeg",
      // "/images/construction/construction15.jpeg",
      // "/images/construction/construction16.jpeg",
      // "/images/construction/construction17.jpeg",
      // "/images/construction/construction18.jpeg",
      // "/images/construction/construction19.jpeg",
      // "/images/construction/construction20.jpeg",
    ]
  },

  {
    id: 3,
    title: "Exterior Design",
    cover: "/images/exterior/exterior23.jpeg",
    images: [
      "/images/exterior/exterior01.jpeg",
      // "/images/exterior/exterior02.jpeg",
      // "/images/exterior/exterior03.jpeg",
      // "/images/exterior/exterior04.jpeg",
      // "/images/exterior/exterior05.jpeg",
      // "/images/exterior/exterior06.jpeg",
      // "/images/exterior/exterior07.jpeg",
      // "/images/exterior/exterior08.jpeg",
      // "/images/exterior/exterior09.jpeg",
      // "/images/exterior/exterior10.jpeg",
      // "/images/exterior/exterior11.jpeg",
      // "/images/exterior/exterior12.jpeg",
      // "/images/exterior/exterior13.jpeg",
      // "/images/exterior/exterior14.jpeg",
      // "/images/exterior/exterior15.jpeg",
      // "/images/exterior/exterior16.jpeg",
      // "/images/exterior/exterior17.jpeg",
      // "/images/exterior/exterior18.jpg",
      // "/images/exterior/exterior19.jpg",
      // "/images/exterior/exterior20.jpg",
      // "/images/exterior/exterior21.jpg",
      // "/images/exterior/exterior22.jpg",
      // "/images/exterior/exterior23.jpg",
      // "/images/exterior/exterior24.jpg",
      // "/images/exterior/exterior25.jpg",
      // "/images/exterior/exterior26.jpg",
    ]
  }
];



import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ImageSlide = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState({});

  // Animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-10  ">



      {/* Projects Grid */}
      {/* STACKED PROJECT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {projects.map((project) => (
          <div
            key={project.id}
            className="fade-up cursor-pointer group flex flex-col items-center"
            onClick={() => {
              setSelectedProject(project);
              setCurrentIndex(0);
            }}
          >

            {/* STACK WRAPPER */}
            <div className="relative md:w-75 w-65 h-95 flex items-center justify-center">

              {/* BACK CARD */}
              <img
                src={project.images[2]}
                alt=""
                className="
            absolute w-full h-full object-cover rounded-3xl
            translate-x-6 translate-y-6 rotate-6
            shadow-xl opacity-70
            group-hover:translate-x-10 group-hover:translate-y-10 group-hover:rotate-12
            transition duration-500
          "
              />

              {/* MIDDLE CARD */}
              <img
                src={project.images[1]}
                alt=""
                className="
            absolute w-full h-full object-cover rounded-3xl
            -translate-x-4 translate-y-4 -rotate-3
            shadow-2xl opacity-85
            group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:-rotate-6
            transition duration-500
          "
              />

              {/* FRONT CARD (MAIN) */}
              <img
                src={project.cover}
                alt={project.title}
                className="
            relative w-full h-full object-cover rounded-3xl
            shadow-2xl z-20
            group-hover:scale-105 transition duration-500
          "
              />

              {/* Glass overlay */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 z-30"></div>

            </div>

            {/* TITLE */}
            <h3 className="mt-5 text-black fw-[700] text-lg tracking-wide opacity-80 group-hover:opacity-100 transition">
              {project.title}
            </h3>

          </div>
        ))}

      </div>

      {/* ================= SWIPER LUXURY LIGHTBOX ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Background */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl  pointer-events-none"></div>

          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white md:text-2xl text-lg scale-125 z-9999 hover:scale-110 transition cursor-pointer"
            onClick={() => setSelectedProject(null)}
          >
            ✕
          </button>

          {/* Swiper */}
          <div className="w-[90%] max-w-3xl">

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              loop={true}
              navigation
              className="rounded-3xl"
            >
              {selectedProject.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <img
                      src={img}
                      alt="slide"
                      className="w-full h-125 object-cover rounded-3xl shadow-2xl"
                    />

                    <div className="absolute inset-0 rounded-3xl border border-white/20"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Title */}
          <div className="absolute md:bottom-5 bottom-15 text-center  text-white ">
            <h2 className="text-lg tracking-[0.3em] uppercase opacity-80">
              {selectedProject.title}
            </h2>
          </div>

        </div>
      )}
    </div>
  );
};

export default ImageSlide;