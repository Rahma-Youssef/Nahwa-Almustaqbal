import React, { useEffect, useState } from "react";
import logoimage from "../../assets/images/logoimage.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div
          className={`w-[90%] mx-auto flex justify-between items-center
          ${scrolled ? "text-gray-900" : "text-white"}`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logoimage}
              alt="logo"
              className="md:w-12 w-8 transition-all duration-300"
            />
            <p className="font-bold md:text-xl text-sm text-[#C49542]">
              Nahwa Almustaqbal
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-sm md:text-base">
            {["Home", "About Us", "Services", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.replace(" ", "").toLowerCase()}`}
                  className="relative hover:text-[#C49542] transition
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-[#C49542] hover:after:w-full
                  after:transition-all"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden space-y-1"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
        transition-opacity duration-300
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white
        shadow-xl transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-700
          hover:text-[#C49542] active:text-[#C49542] transition-transform duration-300 hover:rotate-90"
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Menu Links */}
        <div className="p-6 pt-16 flex flex-col gap-6 text-gray-900 font-medium">
          {["Home", "About Us", "Services", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.replace(" ", "").toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className=" active:text-[#C49542] hover:text-[#C49542] transition"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
