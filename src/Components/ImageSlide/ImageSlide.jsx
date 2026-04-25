


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
    cover: "public/images/interior/interior55.jpg",
    images: [
      "public/images/interior/interior31.jpg",
      "public/images/interior/interior20.jpg",
      "public/images/interior/interior18.jpg",
      "public/images/interior/interior15.jpg",
      "public/images/interior/interior14.jpg",
      "public/images/interior/interior13.png",
      "public/images/interior/interior12.png",
      "public/images/interior/interior11.jpg",
      "public/images/interior/interior10.png",
      "public/images/interior/interior09.png",
      "public/images/interior/interior08.png",
      "public/images/interior/interior55.jpg",
      "public/images/interior/interior06.jpg",
      "public/images/interior/interior05.webp",
      "public/images/interior/interior04.webp",
      "public/images/interior/interior03.webp",
      "public/images/interior/interior02.webp",
      "public/images/interior/interior01.jpg",
    ],
  },

  {
    id: 2,
    title: "Construction",
    cover: "public/images/construction/construction05.jpg",
    images: [
      "public/images/construction/construction01.jpg",
      "public/images/construction/construction02.jpg",
      "public/images/construction/construction03.jpg",
      "public/images/construction/construction09.jpeg",
      "public/images/construction/construction10.jpeg",
      "public/images/construction/construction11.jpeg",
      "public/images/construction/construction12.jpeg",
      "public/images/construction/construction13.jpeg",
      "public/images/construction/construction14.jpeg",
      "public/images/construction/construction15.jpeg",
      "public/images/construction/construction16.jpeg",
      "public/images/construction/construction17.jpeg",
      "public/images/construction/construction18.jpeg",
      "public/images/construction/construction19.jpeg",
      "public/images/construction/construction20.jpeg",
    ],
  },

  {
    id: 3,
    title: "Exterior Design",
    cover: "public/images/exterior/exterior23.jpg",
    images: [
      "public/images/exterior/exterior01.jpeg",
      "public/images/exterior/exterior02.jpeg",
      "public/images/exterior/exterior03.jpeg",
      "public/images/exterior/exterior04.jpeg",
      "public/images/exterior/exterior05.jpeg",
      "public/images/exterior/exterior11.jpeg",
      "public/images/exterior/exterior12.jpeg",
      "public/images/exterior/exterior13.jpeg",
      "public/images/exterior/exterior14.jpeg",
      "public/images/exterior/exterior15.jpeg",
      "public/images/exterior/exterior16.jpeg",
      "public/images/exterior/exterior17.jpeg",
      "public/images/exterior/exterior18.jpg",
      "public/images/exterior/exterior19.jpg",
      "public/images/exterior/exterior20.jpg",
      "public/images/exterior/exterior21.jpg",
      "public/images/exterior/exterior22.jpg",
      "public/images/exterior/exterior23.jpg",
      "public/images/exterior/exterior24.jpg",
      "public/images/exterior/exterior25.jpg",
      "public/images/exterior/exterior26.jpg",
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