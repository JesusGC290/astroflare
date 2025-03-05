import { Link } from "react-router";
import astroLogo from "../assets/astro-logo.svg";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const baseUrl = import.meta.env.SITE;
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
            <section className="group flex flex-col basis-32">
              <h2 id="footerHeading0" className="mb-4 label-base leading-none text-white font-semibold">
                Recursos
              </h2>
              <ul aria-labelledby="footerHeading0" className="flex flex-col gap-2">
                <li>
                  <Link to={`${baseUrl}/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link to={`${baseUrl}/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Astro
                  </Link>
                </li>
                <li>
                  <Link to={`${baseUrl}/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Sitios
                  </Link>
                </li>
              </ul>
            </section>
            <section className="group flex flex-col basis-32">
              <h2 id="footerHeading2" className="mb-4 label-base leading-none text-white font-semibold">
                Acerca
              </h2>
              <ul aria-labelledby="footerHeading2" className="flex flex-col gap-2">
                <li>
                  <Link to={`${baseUrl}/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link to={`${baseUrl}/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to={`${baseUrl}/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Partners
                  </Link>
                </li>
              </ul>
            </section>
            <section className="group flex flex-col basis-32">
              <h2 id="footerHeading3" className="mb-4 label-base leading-none text-white font-semibold">
                Legal
              </h2>
              <ul aria-labelledby="footerHeading3" className="flex flex-col gap-2">
                <li>
                  <Link to={`${baseUrl}/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to={`${baseUrl}/`} className="whitespace-nowrap link flex gap-2 items-center">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </nav>
        <hr className="border-gray-700" />
        <nav aria-label="Legal" className="py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm md:gap-4 md:text-base flex-wrap justify-center">
            <img src={astroLogo.src} width="115" height="48" alt="Astro Homepage" />
            <Link target="_blank" className="link" to="https://github.com/withastro/astro/blob/main/LICENSE">
              © 2025&nbsp;
            </Link>
            <Link className="link" target="_blank" to="https://github.com/withastro/astro/graphs/contributors">
              All rights reserved.
            </Link>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <a
              target="_blank"
              rel="noopener noreferer"
              className="link flex items-center gap-2 p-3 text-white"
              href="https://facebook.com"
            >
              <span className="sr-only">Join the Astro community on Discord</span>
              <Facebook size={28} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferer"
              className="link flex items-center gap-2 p-3 text-white"
              href="https://instagram.com"
            >
              <span className="sr-only">Go to Astro's GitHub repo</span>
              <Instagram size={28} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferer"
              className="link flex items-center gap-2 p-3 text-white"
              href="https://twitter.com"
            >
              <span className="sr-only">Follow Astro on Mastodon</span>
              <Twitter size={28} />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
