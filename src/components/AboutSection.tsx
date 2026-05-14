"use client";

import { Img as Image } from "@/components/Img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface LifestyleCard {
  image: string;
  label: string;
  width: number;
  height: number;
}

const lifestyleCards: LifestyleCard[] = [
  {
    image: "/images/sobre-liberdade.webp",
    label: "Liberdade",
    width: 801,
    height: 667,
  },
  {
    image: "/images/sobre-momentos.webp",
    label: "Momentos",
    width: 801,
    height: 667,
  },
  {
    image: "/images/sobre-historias.webp",
    label: "Histórias",
    width: 801,
    height: 667,
  },
];

export function AboutSection() {
  return (
    <section id="sobre-nos" className="py-10 pb-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[rgb(229,67,96)]">
            Sobre nós
          </p>
          <h2 className="text-4xl font-semibold text-[rgb(78,75,74)] mt-2 mb-2">
            Servir à sua beleza é o nosso propósito
          </h2>
          <p className="text-base text-[rgb(118,113,112)] max-w-[600px] mx-auto">
            Acreditamos que beleza e autoestima andam juntas. Desde 1981
            transformamos vidas através da estética.
          </p>
        </div>

        {/* Lifestyle cards swiper */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
          }}
          className="w-full mb-14"
        >
          {lifestyleCards.map((card) => (
            <SwiperSlide key={card.label}>
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "801 / 667" }}
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  width={card.width}
                  height={card.height}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Label */}
                <span className="absolute bottom-6 left-6 text-white text-2xl font-semibold uppercase tracking-widest">
                  {card.label}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[rgb(78,75,74)] mb-4">
              Transformando vidas desde 1981
            </h3>
            <p className="text-base text-[rgb(118,113,112)] leading-[1.7] max-w-2xl">
              Começando como um pequeno negócio familiar e crescendo para se
              tornar referência nacional em estética, a Onodera carrega décadas
              de dedicação ao cuidado com o corpo e a autoestima das pessoas.
              Nossa missão é proporcionar bem-estar real, com tecnologia de ponta
              e profissionais apaixonados pelo que fazem.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#"
              className="inline-flex items-center justify-content-center px-6 py-3 rounded-full border border-[rgb(229,67,96)] text-[rgb(229,67,96)] text-sm font-medium transition-colors hover:bg-[rgb(229,67,96)] hover:text-white whitespace-nowrap"
            >
              Saiba mais sobre a Onodera
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
