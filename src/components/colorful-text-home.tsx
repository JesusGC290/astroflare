"use client";
import React from "react";
import { ColourfulText } from "./ui/colourful-text";

export function ColourfulTextHome() {
  return (
    <h3 className="text-base lg:text-lg font-bold text-white relative py-2">
      Enfoque <ColourfulText text="personalizado" />
    </h3>
  );
}
