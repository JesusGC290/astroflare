import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function BackgroundGradientAnimationHero() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-center gap-5 md:gap-6 lg:gap-8 px-4">
        <a
          href={`${baseUrl}/`}
          className="h-9 group w-fit flex items-center justify-center gap-0 bg-astro-dark-900/55 rounded-full"
        >
          <div className="px-3 h-full w-fit flex items-center gap-2 bg-gradient-to-tr from-[var(--flare-blue-600)] to-[var(--flare-pink-300)] rounded-full">
            <span className="text-sm text-white font-light">Descubre</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-white block sm:hidden" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
              ></path>{" "}
            </svg>
          </div>
          <div className="hidden sm:flex px-3 h-full w-fit items-center justify-center gap-2">
            <span className="text-sm text-astro-gray-100 group-hover:underline font-light">
              Cómo funcionan los sitios web!
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-astro-gray-100" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
              ></path>
            </svg>
          </div>
        </a>
        <div className="flex flex-col items-center gap-3">
          <p className="font-bold text-3xl md:text-4xl lg:text-6xl bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-b from-white to-white/50">
            Creamos sitios web a la medida
          </p>
          <p className="text-xl md:text-xl font-normal text-white/80">
            Te ayudamos a tener presencia online a través de sitios web fantásticos, rápidos y efectivos
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-fit">
          <a
            href={`${baseUrl}/`}
            className="bg-white px-6 py-2 group rounded-full text-base font-normal transition-all ease-in-out duration-500 hover:cursor-pointer"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--flare-blue-600)] to-[var(--flare-pink-300)]  group-hover:text-blue-700 transition-all ease-in-out duration-500">
              Explora nuestros proyectos
            </span>
          </a>
          <a
            href={`${baseUrl}/`}
            className="bg-white  px-6 py-2 group rounded-full text-base font-normal transition-all ease-in-out duration-500 hover:cursor-pointer"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--flare-red-500)] to-[var(--flare-orange-400)]  group-hover:text-blue-700 transition-all ease-in-out duration-500">
              Explorar paquetes
            </span>
          </a>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
