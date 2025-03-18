"use client";
import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
export function ShootingStarsAndStarsBackgroundHome() {
  return (
    <div className="h-[40rem] rounded-lg bg-radial-[at_75%_5%] from-[var(--flare-red-900)] to-[var(--flare-blue-900)] flex flex-col items-center justify-center relative w-full overflow-hidden">
      <div className="space-y-6 absolute z-10 flex flex-col items-center justify-center w-full h-full">
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
          <span>¡Comienza tu proyecto hoy!</span>
        </h2>
        <a
          href={`/contacto`}
          className="bg-white px-6 py-2 group rounded-full text-base font-normal transition-all ease-in-out duration-500 hover:cursor-pointer text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--flare-blue-900)] to-[var(--flare-red-500)]  group-hover:text-blue-700 transition-all ease-in-out duration-500">
            Recibe una consulta gratuita
          </span>
        </a>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
