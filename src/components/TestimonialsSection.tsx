"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface Testimonial {
  title: string;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Renascimento da minha pele",
    text: "Sinto-me imensamente grata por ter encontrado o tratamento certo na Onodera. Em poucos meses, minha pele se transformou completamente.",
    author: "Cliente Onodera",
  },
  {
    title: "Autoestima renovada",
    text: "Nunca imaginei que um tratamento estético pudesse mudar tanto minha vida. A equipe Onodera é atenciosa, profissional e realmente se importa com cada paciente.",
    author: "Cliente Onodera",
  },
  {
    title: "Resultado além das expectativas",
    text: "Após anos tentando resolver meus problemas de pele sem sucesso, a Onodera finalmente me deu o resultado que eu sempre sonhei. Recomendo a todas as amigas!",
    author: "Cliente Onodera",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[rgb(255,193,7)]"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-8 pb-14 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[rgb(229,67,96)] mb-4">
              Depoimentos
            </p>

            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              className="w-full [&_.swiper-pagination]{margin-top:24px} [&_.swiper-pagination]{position:static}"
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx}>
                  <div className="pb-8">
                    <StarRating />
                    <h3 className="text-2xl font-semibold text-[rgb(78,75,74)] mt-4 mb-4">
                      {t.title}
                    </h3>
                    <p className="text-base text-[rgb(118,113,112)] leading-[1.7]">
                      {t.text}
                    </p>
                    <p className="mt-4 text-sm font-medium text-[rgb(78,75,74)]">
                      — {t.author}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right column — photo */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/depoimento.webp"
              alt="Depoimento Onodera"
              width={1074}
              height={1047}
              className="w-full max-w-[450px] aspect-square object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
