import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsPortafolio() {
  const testimonials = [
    {
      quote:
        "Astroflare ha sido un socio invaluable para nuestra empresa. Su equipo de expertos ha brindado servicios de alta calidad y ha superado nuestras expectativas en todos los sentidos.",
      name: "Victor Rojas",
      designation: "Fundador y CEO de Nei Digital",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "La experiencia de trabajar con Astroflare ha sido increíble. Su equipo de expertos ha brindado servicios de alta calidad y ha superado nuestras expectativas en todos los sentidos.",
      name: "Anonymous",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Me encantó trabajar con Astroflare. Su equipo es muy profesional y siempre están dispuestos a ayudar. La calidad de su trabajo es excepcional.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Astroflare ha brindado servicios de alta calidad y ha superado nuestras expectativas en todos los sentidos. Su equipo es muy conocedor y siempre están al día con las últimas tendencias.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "La colaboración con Astroflare ha sido muy fructífera. Su equipo ha brindado soluciones innovadoras y ha ayudado a nuestra empresa a crecer y mejorar.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
