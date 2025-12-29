import ImageSlide from "../../Components/ImageSlide/ImageSlide";
import { OutlineText } from "../../Components/outline-text";
import React from "react";

// Small floating dots animation using CSS
const AnimatedBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="relative w-full h-full">
      {Array.from({ length: 50 }).map((_, i) => (
        <span
          key={i}
          className="absolute bg-black opacity-20 rounded-full animate-float"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>

    <style jsx>{`
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 0.2;
        }
        50% {
          transform: translateY(-20px) translateX(10px);
          opacity: 0.4;
        }
        100% {
          transform: translateY(0) translateX(0);
          opacity: 0.2;
        }
      }

      .animate-float {
        animation-name: float;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }
    `}</style>
  </div>
);

const OurPortfolio = () => {
  return (
    <div id="projects" className="relative text-center overflow-hidden">
      {/* Background animation */}
      <AnimatedBackground />

      {/* Foreground content */}
      <OutlineText className=" mt-10 text-4xl sm:text-5xl md:text-6xl">
        Our Projects
      </OutlineText>
      <p className="mt-4">  عرض لأحدث مشاريعنا وحلولنا الإبداعية </p>
      <div className="w-full  mx-auto ">
        <ImageSlide />
      </div>
    </div>
  );
};

export default OurPortfolio;
