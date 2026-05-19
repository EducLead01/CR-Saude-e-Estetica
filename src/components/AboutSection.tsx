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

      </div>
    </section>
  );
}
