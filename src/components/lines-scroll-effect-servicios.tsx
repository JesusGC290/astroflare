"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { LinesScrollEffect } from "./ui/lines-scroll-effect";

export function LinesScrollEffectServicios() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1.5]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.5]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.5]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.5]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.5]);

  return (
    <div className="h-[600px] md:h-[900px] w-full rounded-md relative pt-0 overflow-clip" ref={ref}>
      <LinesScrollEffect
        pathLengths={[pathLengthFirst, pathLengthSecond, pathLengthThird, pathLengthFourth, pathLengthFifth]}
      />
    </div>
  );
}
