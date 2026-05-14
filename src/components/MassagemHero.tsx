"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    <div
      className="massagem-hero relative w-full overflow-hidden"
      style={{ height: "90vh", minHeight: 520, maxHeight: 800 }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        speed={800}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay escuro */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.10) 100%)",
              }}
            />
            {/* Conteúdo */}
            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                padding: "80px max(24px, 4vw) 60px",
                maxWidth: 700,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  color: "rgba(255,255,255,0.75)",
                  marginBottom: 20,
                }}
              >
                {slide.tag}
              </span>
              <h1
                style={{
                  fontSize: "clamp(36px, 5.5vw, 64px)",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.15,
                  whiteSpace: "pre-line",
                  textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                  margin: 0,
                }}
              >
                {slide.title}
              </h1>
              <p
                style={{
                  marginTop: 20,
                  fontSize: "clamp(15px, 1.8vw, 18px)",
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: 440,
                  lineHeight: 1.75,
                }}
              >
                {slide.subtitle}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
                <a
                  href="#agendar"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    background: "rgb(229,67,96)",
                    padding: "14px 28px",
                    borderRadius: 9999,
                    textDecoration: "none",
                  }}
                >
                  Agendar Sessão
                </a>
                <a
                  href="#beneficios"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#fff",
                    border: "1.5px solid rgba(255,255,255,0.55)",
                    padding: "14px 28px",
                    borderRadius: 9999,
                    textDecoration: "none",
                  }}
                >
                  Ver Benefícios
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .massagem-hero .swiper,
        .massagem-hero .swiper-wrapper,
        .massagem-hero .swiper-slide {
          height: 100%;
        }
        .massagem-hero .swiper-pagination {
          bottom: 28px;
        }
        .massagem-hero .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.5);
          opacity: 1;
          transition: all 0.3s;
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
