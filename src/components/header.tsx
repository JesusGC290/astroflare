import React, { useEffect, useState } from "react";
import "../styles/global.css";
import { Facebook, Instagram, Twitter, Menu } from "lucide-react";
import astroLogo from "../assets/astroflare_h_w.svg";

export function Header() {
  // Control del menú en móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Effect to handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      // Update isDesktop based on window size
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to close the menu on desktop
  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false); // Close menu if the screen is resized to desktop
    }
  }, [isDesktop]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-100 duration-500 ease-in-out ${
        isMenuOpen ? "bg-black h-screen" : "bg-black/30"
      }`}
    >
      <header className="shadow py-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-0">
          {/* Logo */}
          <a href={`/`} className="text-2xl font-bold">
            <img src={astroLogo.src} width="115" height="48" alt="Astro Homepage" />
          </a>

          {/* Menú de navegación en escritorio */}
          <div className="hidden shrink flex-row items-center gap-12 lg:flex text-base">
            <a href={`/`} className="text-slate-100 hover:text-[#4af2c8] font-light text-[16px]">
              Inicio
            </a>

            <a href={`/servicios`} className="text-slate-100 hover:text-[#4af2c8] font-light text-[16px]">
              Servicios
            </a>

            <a href={`/portafolio`} className="text-slate-100 hover:text-[#4af2c8] font-light">
              Portafolio
            </a>

            {/* <a href={`/about`} className="text-slate-100 hover:text-[#4af2c8] font-light">
              Sobre nosotros
            </a>  0
            */}

            <a href={`/contacto`} className="text-slate-100 hover:text-[#4af2c8] font-light">
              Contacto
            </a>
          </div>
          {/* Redes sociales */}
          <div className="hidden lg:flex">
            <div className="flex items-center gap-4 flex-wrap">
              <a href="https://facebook.com" className="hover:text-blue-500" target="_blank">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-500" target="_blank">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400" target="_blank">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Icono de menú para móviles y tabletas */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-100 p-2">
              <Menu size={30} />
            </button>
          </div>
        </nav>

        {/* Menú desplegable en móviles */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out transform
              ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          {isMenuOpen && (
            <nav className="text-xl flex flex-col divide-y divide-gray-500 pb-12 text-left [&>*]:p-6">
              <a href={`/`} className="text-slate-100 hover:text-[#4af2c8] font-light text-[16px]">
                Inicio
              </a>
              <a href={`/servicios`} className="text-slate-100 hover:text-[#4af2c8] font-light text-[16px]">
                Servicios
              </a>

              <a href={`/portafolio`} className="text-slate-100 hover:text-[#4af2c8] font-light">
                Portafolio
              </a>

              {/* <a href={`/about`} className="text-slate-100 hover:text-[#4af2c8] font-light">
                Sobre nosotros
              </a>
              */}

              <a href={`/contacto`} className="text-slate-100 hover:text-[#4af2c8] font-light">
                Contacto
              </a>
              <div className="flex flex-wrap justify-between gap-12 gap-y-6">
                <div className="flex items-center gap-4 flex-wrap">
                  <a href="https://facebook.com" className="hover:text-blue-500" target="_blank">
                    <Facebook size={20} />
                  </a>
                  <a href="https://instagram.com" className="hover:text-pink-500" target="_blank">
                    <Instagram size={20} />
                  </a>
                  <a href="https://twitter.com" className="hover:text-blue-400" target="_blank">
                    <Twitter size={20} />
                  </a>
                </div>
                <a
                  href={`/portafolio`}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-violet-900 flex-grow sm:max-w-sm rounded-full text-center font-light"
                >
                  Explorar
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}
