"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Slide = {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
};

const slides: Slide[] = [
  {
    id: 1,
    tag: "Bem-vindo à Onodera",
    title: "Sua jornada de beleza e bem-estar na Onodera!",
    subtitle:
      "Na Onodera, oferecemos uma ampla variedade de tratamentos estéticos personalizados para realçar sua beleza e cuidar do seu bem-estar.",
    image: "/images/hero-banner-1.webp",
    imageWidth: 1146,
    imageHeight: 833,
    imageAlt: "Tratamentos estéticos Onodera",
  },
  {
    id: 2,
    tag: "Tratamentos Exclusivos",
    title: "Cuidado especializado para cada necessidade da sua pele.",
    subtitle:
      "Nossos especialistas utilizam as melhores tecnologias para oferecer resultados surpreendentes e duradouros.",
    image: "/images/hero-banner-2.webp",
    imageWidth: 1146,
    imageHeight: 833,
    imageAlt: "Especialistas em estética Onodera",
  },
];

export function HeroSection() {
  return (
    <section
      id="rwdSlider-1"
      className="relative overflow-hidden"
      style={{ background: "#FF8672" }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex items-stretch min-h-[480px] md:min-h-[560px] lg:min-h-[620px]">
              {/* Left panel — white */}
              <div
                className="relative z-10 flex flex-col justify-center w-full md:w-1/2 bg-white px-6 py-12 md:pr-16 md:pl-0"
                style={{
                  paddingLeft: "max(24px, calc((100vw - 1168px) / 2))",
                }}
              >
                {/* Small tag */}
                <span
                  className="inline-block text-xs font-medium uppercase tracking-widest mb-4"
                  style={{ color: "rgb(229,67,96)" }}
                >
                  {slide.tag}
                </span>

                {/* Heading */}
                <h2
                  className="font-medium leading-snug"
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    color: "rgb(78,75,74)",
                    lineHeight: 1.2,
                    maxWidth: 440,
                  }}
                >
                  {slide.title}
                </h2>

                {/* Subtitle */}
                <p
                  className="mt-4"
                  style={{
                    fontSize: 16,
                    color: "rgb(118,113,112)",
                    maxWidth: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {slide.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 mt-8">
                  <a
                    href="#"
                    className="text-sm font-medium text-white px-6 py-3 transition-opacity hover:opacity-85"
                    style={{
                      background: "rgb(229,67,96)",
                      borderRadius: 9999,
                    }}
                  >
                    Agendar Consulta
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium px-6 py-3 transition-colors hover:bg-[#F2D9DD]"
                    style={{
                      color: "rgb(78,75,74)",
                      borderRadius: 9999,
                      border: "1px solid #F2D9DD",
                    }}
                  >
                    Conheça os Tratamentos
                  </a>
                </div>
              </div>

              {/* Right panel — coral */}
              <div
                className="hidden md:block absolute inset-y-0 right-0 w-1/2"
                style={{
                  background: "#FF8672",
                  backgroundImage: "url('/images/hero-bg-decorative.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right bottom",
                }}
              >
                {/* Decorative icon — top right */}
                <div className="absolute top-6 right-6">
                  <Image
                    src="/images/hero-decorative.webp"
                    alt=""
                    width={92}
                    height={98}
                    aria-hidden="true"
                  />
                </div>

                {/* Hero photo — bottom right */}
                <div className="absolute bottom-0 right-0 h-full flex items-end">
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    width={slide.imageWidth}
                    height={slide.imageHeight}
                    className="object-contain object-bottom max-h-full w-auto"
                    priority={slide.id === 1}
                  />
                </div>
              </div>

              {/* Mobile: coral bg photo strip */}
              <div
                className="md:hidden absolute inset-0 -z-0"
                style={{ background: "#FF8672" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper pagination sits inside the component via CSS; add bottom offset */}
      <style>{`
        #rwdSlider-1 .swiper-pagination {
          bottom: 16px;
        }
        #rwdSlider-1 .swiper-pagination-bullet {
          background: rgb(229,67,96);
          opacity: 0.4;
          width: 8px;
          height: 8px;
        }
        #rwdSlider-1 .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
