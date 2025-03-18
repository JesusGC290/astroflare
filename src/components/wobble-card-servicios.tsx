"use client";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import casaAsistencia from "../assets/casaDeAsistencia.png";
import neiDispositivos from "../assets/neiDispositivos.png";

export function WobbleCardServicios() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-radial-[at_75%_5%] from-[var(--flare-green-600)] to-[var(--flare-blue-800)] min-h-[500px] lg:min-h-[300px]"
        className="space-y-8"
      >
        <div className="md:max-w-xs lg:max-w-sm">
          <h2 className="text-left text-balance text-2xl lg:text-3xl font-semibold text-white">Sitios Web Estáticos</h2>
          <p className="mt-4">
            Si lo que buscas es una presencia online simple pero efectiva, nuestros sitios estáticos son la opción
            ideal. Crearemos un sitio web limpio, optimizado y visualmente atractivo para tu negocio, sin complicaciones
            innecesarias.
          </p>
          <p className="text-lg font-bold mt-8">Son perfectos para:</p>
          <ul className="list-disc list-inside">
            <li>Portafolios personales</li>
            <li>Tarjetas de presentación digitales</li>
            <li>Landing pages para productos o servicios</li>
            <li>Sitios sencillos para negocios locales</li>
          </ul>
          <p className="text-lg font-bold mt-4">Beneficios:</p>
          <ul className="list-disc list-inside">
            <li>Rápidos de desarrollar</li>
            <li>Carga rápida y eficiente</li>
            <li>Totalmente optimizados para móviles</li>
            <li>Personalización sencilla</li>
          </ul>
        </div>
        {/* <div className=" mt-4">
          <a
            href={`/portafolio`}
            className="bg-white px-6 py-2 group rounded-full text-base font-normal transition-all ease-in-out duration-500 hover:cursor-pointer"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--flare-red-500)] to-[var(--flare-orange-400)] group-hover:text-blue-700 transition-all ease-in-out duration-500">
              Explorar más
            </span>
          </a>
        </div> */}
        <img
          src={`${casaAsistencia.src}`}
          width={500}
          height={500}
          alt="sitio estatico"
          className="md:absolute -right-[25%] lg:-right-[25%] filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-radial-[at_75%_5%] from-[var(--flare-cyan-600)] to-[var(--flare-blue-800)]">
        <h2 className="max-w-80  text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          SEO Profesional
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          ¿Ya tienes un sitio web pero no está siendo encontrado por tus clientes? Ofrecemos desarrollo SEO profesional
          para asegurar que tu sitio no solo sea hermoso, sino también visible. Trabajamos con estrategias de
          optimización de motores de búsqueda para mejorar tu clasificación en Google y atraer más tráfico a tu sitio.
        </p>
        <p className="text-lg font-bold mt-8">Beneficios:</p>
        <ul className="list-disc list-inside">
          <li>Optimización en motores de búsqueda (SEO)</li>
          <li>Mejora de visibilidad online</li>
          <li>Aumento de tráfico orgánico</li>
          <li>Estrategias personalizadas según tu negocio</li>
        </ul>
        {/* <div className=" mt-4">
          <a
            href={`/portafolio`}
            className="bg-white px-6 py-2 group rounded-full text-base font-normal transition-all ease-in-out duration-500 hover:cursor-pointer"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--flare-red-500)] to-[var(--flare-orange-400)] group-hover:text-blue-700 transition-all ease-in-out duration-500">
              Explorar más
            </span>
          </a>
        </div> */}
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-radial-[at_75%_5%] from-[var(--flare-purple-600)] to-[var(--flare-deep-purple-900)]">
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Plataformas Personalizadas
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Para aquellos que necesitan más que un simple sitio web, ofrecemos el desarrollo de plataformas
              personalizadas. Ya sea que necesites una plataforma con funcionalidades de usuario, una base de datos
              interactiva o integración con otras herramientas, estamos listos para crear soluciones a medida.
            </p>
            {/* <div className=" mt-4">
              <a
                href={`/portafolio`}
                className="bg-white px-6 py-2 group rounded-full text-base font-normal transition-all ease-in-out duration-500 hover:cursor-pointer"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--flare-red-500)] to-[var(--flare-orange-400)] group-hover:text-blue-700 transition-all ease-in-out duration-500">
                  Explorar más
                </span>
              </a>
            </div> */}
          </div>
          <div className="pt-8 md:pt-0 md:ps-4">
            <p className="text-lg font-bold">Beneficios:</p>
            <ul className="list-disc list-inside">
              <li>Funcionalidades avanzadas personalizadas</li>
              <li>Integración con APIs o sistemas existentes</li>
              <li>Desarrollo de backend y bases de datos</li>
              <li>Plataforma escalable para el crecimiento</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <img src={`${neiDispositivos.src}`} alt="linear demo image" className="object-contain rounded-2xl w-full" />
        </div>
      </WobbleCard>
    </div>
  );
}
