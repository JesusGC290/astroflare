"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #2f4cb3, #4af2c8)",
    "linear-gradient(to bottom right, #2c7ca0, #542fb3)",
    "linear-gradient(to bottom right, #d83952, #ff7c54)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="relative flex h-[20rem] md:h-[26rem] justify-between overflow-y-auto rounded-md max-w-screen-xl sm:px-8 w-full mx-auto"
      ref={ref}
    >
      <div className="relative flex items-start w-full mx-auto px-4 md:px-0 md:mx-0 md:w-[50%]">
        <div className="w-full lg:max-w-3xl">
          {content.map((item, index) => (
            <>
              <div key={item.title + index} className="py-20 md:my-30 w-full">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="mt-10 text-slate-300"
                >
                  {item.description}
                </motion.p>
              </div>
              <div
                style={{ background: backgroundGradient }}
                className={cn("h-60 w-full overflow-hidden rounded-md bg-white md:hidden", contentClassName)}
              >
                {content[activeCard].content ?? null}
              </div>
            </>
          ))}
          <div className="h-50 md:h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-20 hidden h-60 md:w-80 lg:w-120 overflow-hidden rounded-md bg-white md:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
