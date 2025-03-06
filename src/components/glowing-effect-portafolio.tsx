"use client";
import { Figma, LayoutPanelTop, TrendingUpDown, ChevronsLeftRightEllipsis, SquareDashedBottomCode } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export function GlowingEffectPortafolio() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Figma className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Diseñamos con Figma"
        description="Creamos experiencias visuales atractivas y coherentes, diseñadas específicamente para programación y compatibles con herramientas como Tailwind y otros frameworks."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<ChevronsLeftRightEllipsis className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Astro y Tailwind"
        description="Creación de sitios estáticos optimizados con Astro y Tailwind. Nuestra combinación favorita para ofrecer sitios web rápidos, profesionales y escalables, con todos los beneficios de la última tecnología."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<LayoutPanelTop className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Otros servicios o plataformas online"
        description="Desarrollo de soluciones personalizadas en plataformas online como WordPress, Webflow y Framer. Creamos sitios web y plugins a medida para satisfacer las necesidades específicas de nuestros clientes."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<SquareDashedBottomCode className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Plataformas con React"
        description="Desarrollo de plataformas únicas y escalables con React. Creamos experiencias web interactivas y personalizadas, diseñadas para satisfacer las necesidades específicas de nuestros clientes."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<TrendingUpDown className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Servicios SEO personalizados"
        description="Análisis y optimización de SEO profesional con herramientas personalizadas para seguimiento y análisis de tráfico en tu sitio. Mejoramos la visibilidad y el rendimiento de tus sitios web en los motores de búsqueda."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full border border-gray-900 rounded-2.5xl p-2 md:rounded-3xl md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="relative flex h-full flex-col border border-gray-300 justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 shadow-[0px_0px_20px_0px_#007f4c] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">{icon}</div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance ">
                {title}
              </h3>
              <p
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem]
              md:text-base/[1.375rem]  "
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
