"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const slides = [
  {
    image: `${bp}/images/massagem-slide-1.jpg`,
    tag: "Relaxamento Profundo",
    title: "Massagem Corporal\nTerapêutica",
    subtitle:
      "Alívio de tensões musculares com técnicas especializadas para o seu bem-estar completo.",
  },
  {
    image: `${bp}/images/massagem-slide-2.jpg`,
    tag: "Revitalização",
    title: "Renove sua\nEnergia",
    subtitle:
      "Sessões personalizadas que restauram o equilíbrio do corpo e da mente.",
  },
  {
    image: `${bp}/images/massagem-slide-3.jpg`,
    tag: "Bem-estar",
    title: "Cuide-se com\nQuem Entende",
    subtitle:
      "Profissionais especializados e ambiente acolhedor para uma experiência transformadora.",
  },
];

export function MassagemHero() {
  return (
    <div className="massagem-hero relative w-full" style={{ height: "90vh", minHeight: 520, maxHeight: 800 }}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
        style={{ height: "100%" }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} style={{ height: "100%" }}>
            {/* Imagem de fundo */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            {/* Overlay escuro suave */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.28) 60%, rgba(0,0,0,0.10) 100%)",
              }}
            />
            {/* Conteúdo */}
            <div
              className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16"
              style={{ maxWidth: 700, paddingTop: 80 }}
            >
              <span
                className="inline-block text-xs font-medium uppercase tracking-[3px] mb-5"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {slide.tag}
              </span>
              <h1
                className="font-semibold text-white leading-tight"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 64px)",
                  whiteSpace: "pre-line",
                  textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                }}
              >
                {slide.title}
              </h1>
              <p
                className="mt-5 text-white/80"
                style={{
                  fontSize: "clamp(15px, 1.8vw, 18px)",
                  maxWidth: 440,
                  lineHeight: 1.75,
                }}
              >
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 mt-9">
                <a
                  href="#agendar"
                  className="text-sm font-semibold text-white px-7 py-3.5 transition-opacity hover:opacity-85"
                  style={{ background: "rgb(229,67,96)", borderRadius: 9999 }}
                >
                  Agendar Sessão
                </a>
                <a
                  href="#beneficios"
                  className="text-sm font-medium px-7 py-3.5 transition-colors hover:bg-white/10"
                  style={{
                    color: "white",
                    border: "1.5px solid rgba(255,255,255,0.55)",
                    borderRadius: 9999,
                  }}
                >
                  Ver Benefícios
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilo dos dots de paginação */}
      <style>{`
        .massagem-hero .swiper-pagination {
          bottom: 28px;
        }
        .massagem-hero .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.5);
          opacity: 1;
          transition: background 0.3s;
        }
        .massagem-hero .swiper-pagination-bullet-active {
          background: rgb(229,67,96);
          width: 28px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
