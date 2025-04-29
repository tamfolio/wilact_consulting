import React from "react";

const logos = [
  { src: "/assets/clients (1).png", alt: "Client 1" },
  { src: "/assets/clients (2).png", alt: "Client 2" },
  { src: "/assets/clients (3).png", alt: "Client 3" },
  { src: "/assets/clients (4).png", alt: "Client 4" },
  { src: "/assets/clients (5).png", alt: "Client 5" },
  { src: "/assets/clients (6).png", alt: "Client 6" },
];

function ClientLogoSlider() {
  return (
    <section className="overflow-hidden bg-white py-8">
      <div className="whitespace-nowrap animate-scroll flex items-center justify-between gap-12 px-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-12 inline-block"
          />
        ))}
      </div>
    </section>
  );
}

export default ClientLogoSlider;
