"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BentoGridThirdHome() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2  items-center space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[var(--flare-blue-600)] to-[var(--flare-green-200)] flex-shrink-0" />
        <div className="w-full  h-4 rounded-full bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
      >
        <div className="w-full  h-4 rounded-full bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[var(--flare-red-500)] to-[var(--flare-pink-300)]" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[var(--flare-orange-400)] to-[var(--flare-yellow-400)]" />
        <div className="w-full  h-4 rounded-full bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);

  const [widths, setWidths] = useState<any[]>([]);

  useEffect(() => {
    const widthsArray = arr.map(() => Math.random() * (100 - 40) + 40 + "%");
    setWidths(widthsArray);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: widths[i],
          }}
          className="flex flex-row rounded-full border border-white/[0.2] p-2  items-center space-x-2 bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] rounded-lg  flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-black border-white/[0.1] border  flex flex-col items-center justify-center"
      >
        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[var(--flare-red-500)] to-[var(--flare-pink-300)] flex-shrink-0" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">Comunicación directa</p>
        <p className="border border-[var(--flare-red-500)]  bg-red-900/20 text-[var(--flare-red-500)] text-xs rounded-full px-2 py-0.5 mt-4">
          Colaboración
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-black border-white/[0.1] border  flex flex-col items-center justify-center">
        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[var(--flare-blue-600)] to-[var(--flare-green-200)] flex-shrink-0" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Flexibilidad y adaptabilidad
        </p>
        <p className="border border-[var(--flare-green-200)]  bg-green-900/20 text-[var(--flare-green-200)] text-xs rounded-full px-2 py-0.5 mt-4">
          Eficiencia
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-black border-white/[0.1] border  flex flex-col items-center justify-center"
      >
        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[var(--flare-orange-400)] to-[var(--flare-yellow-400)] flex-shrink-0" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Respuesta rápida a tus preguntas
        </p>
        <p className="border border-[var(--flare-orange-400)]  bg-orange-900/20 text-[var(--flare-orange-400)] text-xs rounded-full px-2 py-0.5 mt-4">
          Disponibilidad
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-white/[0.2] p-2  items-start space-x-2 bg-black"
      >
        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[var(--flare-blue-600)] to-[var(--flare-green-200)] flex-shrink-0" />
        <p className="text-xs text-neutral-500">
          Ofrecemos precios claros y transparentes, sin sorpresas ni cargos adicionales, para que puedas planificar tu
          presupuesto con confianza.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black"
      >
        <p className="text-xs text-neutral-500">Precios transparentes</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "SEO integrado",
    description: (
      <span className="text-sm">
        Asegúrate de que tu sitio web esté optimizado para los motores de búsqueda y atraiga más tráfico orgánico,
        aumentando tus oportunidades de negocio.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Desarrollo web rápido y eficiente",
    description: (
      <span className="text-sm">
        Aprovecha nuestro proceso de desarrollo web ágil y eficiente para lanzar tu sitio web lo antes posible y empezar
        a atraer clientes.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sitios web personalizados",
    description: (
      <span className="text-sm">
        Recibe un sitio web diseñado específicamente para tu negocio y necesidades, destacando tu marca y valores.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Atención personalizada",
    description: (
      <span className="text-sm">
        Recibe atención personalizada y dedicada a tu proyecto, asegurándote de que tus necesidades y objetivos sean
        comprendidos y cumplidos.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Costos competitivos",
    description: (
      <span className="text-sm">
        Aprovecha nuestros precios competitivos sin sacrificar la calidad, asegurándote de que tu sitio web sea rentable
        y eficaz.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
