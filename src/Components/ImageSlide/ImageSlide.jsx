


import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "Interior Design",
    cover: "/images/interior/interior55.webp",
    images: [
      "/images/interior/interior31.webp",
      "/images/interior/interior20.webp",
      "/images/interior/interior18.webp",
      "/images/interior/interior15.webp",
      "/images/interior/interior14.webp",
      "/images/interior/interior13.webp",
      "/images/interior/interior12.webp",
      "/images/interior/interior11.webp",
      "/images/interior/interior10.webp",
      "/images/interior/interior09.webp",
      "/images/interior/interior08.webp",
      "/images/interior/interior55.webp",
      "/images/interior/interior06.webp",
      "/images/interior/interior05.webp",
      "/images/interior/interior04.webp",
      "/images/interior/interior03.webp",
      "/images/interior/interior02.webp",
      "/images/interior/interior01.webp",
    ],
  },

  {
    id: 2,
    title: "Construction",
    cover: "/images/construction/construction09.jpeg",
    images: [
    
      "/images/construction/construction07.jpeg",
      "/images/construction/construction08.jpeg",
      "/images/construction/construction09.jpeg",
      "/images/construction/construction10.jpeg",
      "/images/construction/construction11.jpeg",
      "/images/construction/construction12.jpeg",
      "/images/construction/construction13.jpeg",
      "/images/construction/construction14.jpeg",
      "/images/construction/construction15.jpeg",
      "/images/construction/construction16.jpeg",
      "/images/construction/construction17.jpeg",
      "/images/construction/construction18.jpeg",
      "/images/construction/construction19.jpeg",
      "/images/construction/construction20.jpeg",
    ],
  },

  {
    id: 3,
    title: "Exterior Design",
    cover: "/images/exterior/exterior23.webp",
    images: [
      "/images/exterior/exterior01.jpeg",
      "/images/exterior/exterior02.jpeg",
      "/images/exterior/exterior03.jpeg",
      "/images/exterior/exterior04.jpeg",
      "/images/exterior/exterior05.jpeg",
      "/images/exterior/exterior11.jpeg",
      "/images/exterior/exterior12.jpeg",
      "/images/exterior/exterior13.jpeg",
      "/images/exterior/exterior14.jpeg",
      "/images/exterior/exterior15.jpeg",
      "/images/exterior/exterior16.jpeg",
      "/images/exterior/exterior17.jpeg",
      "/images/exterior/exterior18.webp",
      "/images/exterior/exterior19.webp",
      "/images/exterior/exterior20.webp",
      "/images/exterior/exterior21.webp",
      "/images/exterior/exterior22.webp",
      "/images/exterior/exterior23.webp",
      "/images/exterior/exterior24.webp",
      "/images/exterior/exterior25.webp",
      "/images/exterior/exterior26.webp",
    ],
  },
];

const ImageSlide = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // ================= PRELOAD IMAGES =================
  useEffect(() => {
    const allImages = projects.flatMap((p) => [
      p.cover,
      ...p.images,
    ]);

    const loadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });

    const startTime = Date.now();

    Promise.all(allImages.map(loadImage)).then(() => {
      const elapsed = Date.now() - startTime;

      const minDuration = 1200; // ⏱ 1.2 ثانية أقل حاجة يظهر فيها skeleton

      const remainingTime = Math.max(minDuration - elapsed, 0);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    });
  }, []);

  // ================= SKELETON LOADER =================
  if (isLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">

              {/* STACKED SKELETON */}
              <div className="relative  md:w-75 w-65 h-95 flex items-center justify-center">
                {/* BACK */}
                <div className="absolute w-full h-full rounded-3xl bg-slate-200 opacity-80 animate-pulse translate-x-6 translate-y-6 rotate-6 shadow-xl"></div>

                {/* MIDDLE */}
                <div className="absolute w-full h-full rounded-3xl bg-slate-300 opacity-90 animate-pulse -translate-x-4 translate-y-4 -rotate-3 shadow-2xl"></div>

                {/* FRONT */}
                <div className="relative w-full h-full rounded-3xl bg-slate-400 animate-pulse shadow-2xl"></div>

              </div>

              {/* TITLE */}
              <div className="mt-5 w-28 h-4 bg-gray-300 animate-pulse rounded"></div>

            </div>
          ))}

        </div>
      </div>
    );
  }

  // ================= MAIN UI =================
  return (
    <div className="w-full max-w-7xl mx-auto py-10">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {projects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer group flex flex-col items-center"
            onClick={() => {
              setSelectedProject(project);
              setCurrentIndex(0);
            }}
          >

            {/* STACKED CARDS */}
            <div className="relative md:w-75 w-65 h-95 flex items-center justify-center">

              {/* BACK */}
              <img
                src={project.images[2]}
                className="absolute w-full h-full object-cover rounded-3xl translate-x-6 translate-y-6 rotate-6 shadow-xl opacity-70 transition duration-500 group-hover:translate-x-10 group-hover:translate-y-10 group-hover:rotate-12"
              />

              {/* MIDDLE */}
              <img
                src={project.images[1]}
                className="absolute w-full h-full object-cover rounded-3xl -translate-x-4 translate-y-4 -rotate-3 shadow-2xl opacity-85 transition duration-500 group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:-rotate-6"
              />

              {/* FRONT */}
              <img
                src={project.cover}
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-20 group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 rounded-3xl border border-white/20 z-30"></div>

            </div>

            {/* TITLE */}
            <h3 className="mt-5 text-black font-bold text-lg opacity-80 group-hover:opacity-100 transition">
              {project.title}
            </h3>

          </div>
        ))}

      </div>

      {/* ================= LIGHTBOX ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>

          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-white text-2xl z-50"
            onClick={() => setSelectedProject(null)}
          >
            ✕
          </button>

          {/* SWIPER */}
          <div className="w-[90%] max-w-3xl">

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              loop
              navigation
              className="rounded-3xl"
            >
              {selectedProject.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    className="w-full h-125 object-cover rounded-3xl shadow-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

          {/* TITLE */}
          <div className="absolute bottom-6 text-white text-center">
            <h2 className="tracking-[0.3em] uppercase opacity-80">
              {selectedProject.title}
            </h2>
          </div>

        </div>
      )}

    </div>
  );
};

export default ImageSlide;