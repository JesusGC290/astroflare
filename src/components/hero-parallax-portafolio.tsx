"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import neiDigital from "../assets/NeiDigitalLanding.png";
import draLuz from "../assets/draLuzPalacio.png";
import casaAsistencia from "../assets/casaDeAsistencia.png";
import CirculosAbiertos from "../assets/CirculosAbiertos.png";
import pideLand from "../assets/pideLand.png";
import LexGuard from "../assets/LexGuard.png";
import Aztecknology from "../assets/Aztecknology.png";
import Renderart from "../assets/Renderart.png";
import polarStudio from "../assets/polarStudio.png";

export function HeroParallaxPortfolio() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Nei Digital",
    link: "https://nei.digital/",
    thumbnail: neiDigital.src,
  },
  {
    title: "Circulos Abiertos",
    link: "https://circulosabiertos.com/",
    thumbnail: CirculosAbiertos.src,
  },
  {
    title: "Pide Land",
    link: "https://pide.land/",
    thumbnail: pideLand.src,
  },
  {
    title: "LexGuard",
    link: "https://lexguard.app/",
    thumbnail: LexGuard.src,
  },
  {
    title: "Aztecknology",
    link: "https://aztecknology.com/",
    thumbnail: Aztecknology.src,
  },
  {
    title: "Dra. Luz Palacio",
    link: "https://www.draluzpalacio.mx/",
    thumbnail: draLuz.src,
  },
  {
    title: "Casa de Asistencia",
    link: "https://casadeasistenciagdl.com/",
    thumbnail: casaAsistencia.src,
  },
  {
    title: "Polar Studio",
    link: "https://astroflare.ai/",
    thumbnail: polarStudio.src,
  },
  {
    title: "Renderart",
    link: "https://jesusgc290.github.io/renderart/",
    thumbnail: Renderart.src,
  },
  {
    title: "Nei Digital",
    link: "https://nei.digital/",
    thumbnail: neiDigital.src,
  },
  {
    title: "Circulos Abiertos",
    link: "https://circulosabiertos.com/",
    thumbnail: CirculosAbiertos.src,
  },
  {
    title: "Pide Land",
    link: "https://pide.land/",
    thumbnail: pideLand.src,
  },
  {
    title: "LexGuard",
    link: "https://lexguard.app/",
    thumbnail: LexGuard.src,
  },
  {
    title: "Aztecknology",
    link: "https://aztecknology.com/",
    thumbnail: Aztecknology.src,
  },
  {
    title: "Dra. Luz Palacio",
    link: "https://www.draluzpalacio.mx/",
    thumbnail: draLuz.src,
  },
];
