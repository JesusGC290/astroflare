import astroLogo from "../assets/astroflare_h_w.svg";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-500 bg-primary">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8">
        <nav aria-label="Secondary" className="flex flex-col lg:flex-row justify-between gap-20 py-8 md:py-12">
          <div className="flex flex-col md:max-lg:w-1/2">
            <p className="font-semibold md:text-xl">Explora más de lo que ofrecemos</p>
            <p className="mb-4 pt-2 text-astro-gray-200 lg:text-balance">
              Descubre nuestras secciones de blog y recursos para aprender más sobre diseño y desarrollo web, y cómo
              podemos ayudarte a mejorar tu presencia en línea.
            </p>
          </div>
          <div className="gap-12 sm:gap-16 lg:gap-20 flex flex-wrap xl:grid xl:grid-cols-4">
            {/* <section className="group flex flex-col basis-32">
              <h2 id="footerHeading0" className="mb-4 label-base leading-none text-white font-semibold">
                Recursos
              </h2>
              <ul aria-labelledby="footerHeading0" className="flex flex-col gap-2">
                <li>
                  <a href={`/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Docs
                  </a>
                </li>
                <li>
                  <a href={`/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Astro
                  </a>
                </li>
                <li>
                  <a href={`/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Sitios
                  </a>
                </li>
              </ul>
            </section> */}
            <section className="group flex flex-col basis-32">
              <h2 id="footerHeading2" className="mb-4 label-base leading-none text-white font-semibold">
                Acerca
              </h2>
              <ul aria-labelledby="footerHeading2" className="flex flex-col gap-2">
                <li>
                  <a href={`/portafolio`} className="whitespace-nowrap link flex gap-2 items-center">
                    Portafolio
                  </a>
                </li>
                {/* <li>
                  <a href={`/about`} className="whitespace-nowrap link flex gap-2 items-center">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href={`/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Blog
                  </a>
                </li>
                <li>
                  <a href={`/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Partners
                  </a>
                </li> */}
              </ul>
            </section>
            <section className="group flex flex-col basis-32">
              <h2 id="footerHeading3" className="mb-4 label-base leading-none text-white font-semibold">
                Legal
              </h2>
              <ul aria-labelledby="footerHeading3" className="flex flex-col gap-2">
                <li>
                  <a href={`/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href={`/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Terminos del servicio
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </nav>
        <hr className="border-gray-700" />
        <nav aria-label="Legal" className="py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm md:gap-4 md:text-base flex-wrap justify-center">
            <a href={`/`} className="text-2xl font-bold">
              <img src={astroLogo.src} width="115" height="48" alt="Astro Homepage" />
            </a>
            <a target="_blank" className="link" href="https://github.com/withastro/astro/blob/main/LICENSE">
              © 2025&nbsp;
            </a>
            <a className="link" target="_blank" href="https://github.com/withastro/astro/graphs/contributors">
              Todos los derechos reservados
            </a>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <a
              target="_blank"
              rel="noopener noreferer"
              className="link flex items-center gap-2 p-3 text-white"
              href="https://facebook.com"
            >
              <span className="sr-only">Siguenos en Facebook</span>
              <Facebook size={28} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferer"
              className="link flex items-center gap-2 p-3 text-white"
              href="https://instagram.com"
            >
              <span className="sr-only">Siguenos en Instagram</span>
              <Instagram size={28} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferer"
              className="link flex items-center gap-2 p-3 text-white"
              href="https://twitter.com"
            >
              <span className="sr-only">Siguenos en X</span>
              <Twitter size={28} />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
