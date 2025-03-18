"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import imgCodeBlock from "../assets/code-block.png";
import imgPersonalizado from "../assets/personalizado.jpg";
import imgData from "../assets/data.jpg";
import imgComunicacion from "../assets/comunicacion.jpg";
import imgSoporte from "../assets/soporte.jpg";

const content = [
  {
    title: "Enfoque 100% personalizado",
    description:
      "Cada proyecto es único. Por eso, nos tomamos el tiempo de entender tus objetivos y crear soluciones a la medida que impulsen tu presencia en línea. Nada de plantillas genéricas; tu sitio web reflejará la identidad de tu marca.",
    content: (
      <div className="h-full">
        <img
          src={imgPersonalizado.src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Experiencia comprobada",
    description:
      "Con años de trabajo en proyectos de diversa complejidad, hemos perfeccionado nuestras habilidades en diseño, desarrollo y optimización. Esta experiencia nos permite brindar resultados sólidos, sin importar el tipo de proyecto.",
    content: (
      <div className="h-full">
        <img
          src={imgCodeBlock.src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Transparencia y comunicación constante",
    description:
      "Valoramos la relación con nuestros clientes y creemos que la comunicación continua es la clave del éxito. Te mantenemos al tanto de cada avance y te asesoramos durante todo el proceso de desarrollo para asegurar un resultado que supere tus expectativas.",
    content: (
      <div className="h-full">
        <img
          src={imgComunicacion.src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Resultados que hacen crecer tu negocio",
    description:
      "Más allá del diseño, creamos sitios enfocados en atraer clientes potenciales y generar oportunidades de venta. Optimizamos aspectos clave como la velocidad de carga, la usabilidad y el SEO, para que tu inversión genere resultados tangibles.",
    content: (
      <div className="h-full">
        <img
          src={imgData.src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Soporte y acompañamiento continuo",
    description:
      "No te dejamos solo después de la entrega. Ofrecemos servicios de mantenimiento y soporte para que tu sitio siempre esté actualizado, seguro y listo para crecer junto con tu negocio.",
    content: (
      <div className="h-full">
        <img
          src={imgSoporte.src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealServicios() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
