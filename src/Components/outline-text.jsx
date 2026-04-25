import React from "react";

export function OutlineText({ children, className = "", ...props }) {
  return (
    <span
      className={`inline-block md:font-extrabold font-bold
        text-[2rem] md:text-[4rem] leading-none
        text-transparent bg-clip-text select-none
        tracking-[3px]
        text-center
   
        ${className}`}
      style={{
        WebkitTextStroke: "2px",
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
      }}
      {...props}
    >
      <span className="[-webkit-text-stroke-color:#000] dark:[-webkit-text-stroke-color:#F4C947]">
        {children}
      </span>
    </span>
  );
}
