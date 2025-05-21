"use client";
import neiDigital from "../assets/NeiDigitalLanding.png";
import draLuz from "../assets/draLuzPalacio.png";
import casaAsistencia from "../assets/casaDeAsistencia.png";

import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function DirectionAwareHoverHome() {
  const imgRender01 = neiDigital.src;
  const imgRender02 = draLuz.src;
  const imgRender03 = casaAsistencia.src;
  return (
    <div className="my-12 relative  flex items-center justify-center gap-4 md:gap-8">
      <DirectionAwareHover imageUrl={imgRender01}>
        <div className="flex flex-col items-center justify-center gap-4 h-full">
          <p className="font-bold text-xl">Nei Digital</p>
          <a
            href="https://nei.digital/"
            target="_blank"
            className="bg-white px-6 py-2 group rounded-full text-base font-normal transition-all ease-in-out duration-500 hover:cursor-pointer"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--flare-blue-900)] to-[var(--flare-red-500)]  group-hover:text-blue-700 transition-all ease-in-out duration-500">
              Explorar sitio
            </span>
          </a>
        </div>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={imgRender02}>
        <div className="flex flex-col items-center justify-center gap-4 h-full">
          <p className="font-bold text-xl">Dra. Luz Palacio</p>
          <a
            href="https://www.draluzpalacio.mx/"
            target="_blank"
            className="bg-white px-6 py-2 group rounded-full text-base font-normal transition-all ease-in-out duration-500 hover:cursor-pointer"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--flare-blue-900)] to-[var(--flare-red-500)]  group-hover:text-blue-700 transition-all ease-in-out duration-500">
              Explorar sitio
            </span>
          </a>
        </div>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={imgRender03}>
        <div className="flex flex-col items-center justify-center gap-4 h-full">
          <p className="font-bold text-xl">Casa de asistencia</p>
          <a
            href="https://casadeasistenciagdl.com/"
            target="_blank"
            className="bg-white px-6 py-2 group rounded-full text-base font-normal transition-all ease-in-out duration-500 hover:cursor-pointer"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--flare-blue-900)] to-[var(--flare-red-500)]  group-hover:text-blue-700 transition-all ease-in-out duration-500">
              Explorar sitio
            </span>
          </a>
        </div>
      </DirectionAwareHover>
    </div>
  );
}
