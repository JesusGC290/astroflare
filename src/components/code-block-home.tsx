"use client";
import React from "react";
import { CodeBlock } from "./ui/code-block";

export function CodeBlockHome() {
  const code = `const ExperienciaEnDesarrollo = () => {
  <p class="text-balance">
    Con años de experiencia en desarrollo, tenemos el
    conocimiento necesario para que tu sitio sea un éxito.
  </p>
}`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock language="jsx" filename="CreamosTuSitio.jsx" highlightLines={[1, 3]} code={code} />
    </div>
  );
}
