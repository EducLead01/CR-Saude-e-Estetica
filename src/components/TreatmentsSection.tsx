"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type TabKey = "corporais" | "faciais" | "depilacao" | "produtos";

interface Treatment {
  name: string;
  image: string;
}

const TABS: { key: TabKey; label: string }[] = [
  { key: "corporais", label: "Tratamentos Corporais" },
  { key: "faciais", label: "Tratamentos Faciais" },
  { key: "depilacao", label: "Depilação" },
  { key: "produtos", label: "Produtos" },
];

const TREATMENTS: Record<TabKey, Treatment[]> = {
  corporais: [
    { name: "CrioSlim", image: "/images/tratamento-crioSlim.jpg" },
    { name: "Onodepil", image: "/images/tratamento-onodepil.webp" },
    {
      name: "Onocavit Powershape",
      image: "/images/tratamento-powershape.webp",
    },
    { name: "OnoRelax 50min", image: "/images/tratamento-onorelax.webp" },
    { name: "DrenoRedux", image: "/images/tratamento-drenoreducx.webp" },
    { name: "Shape Detox", image: "/images/tratamento-shapedetox.webp" },
  ],
  faciais: [
    { name: "Lavieen", image: "/images/tratamento-lavieen.webp" },
    { name: "Limpeza de Pele", image: "/images/tratamento-limpeza-pele.webp" },
    { name: "Exossomos", image: "/images/tratamento-exossomos.webp" },
    {
      name: "Morpheus Pro Facial",
      image: "/images/tratamento-morpheus.webp",
    },
  ],
  depilacao: [
    { name: "Onodepil", image: "/images/tratamento-onodepil.webp" },
    {
      name: "Hydra Intense Serum",
      image: "/images/tratamento-hydra-intense.webp",
    },
  ],
  produtos: [],
};

export function TreatmentsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("corporais");

  const treatments = TREATMENTS[activeTab];

  return (
    <section
      id="multi-tratamentos"
      className="pb-10 xl:py-16"
      style={{ paddingTop: 0 }}
    >
      <div className="container">
        {/* Header */}
        <div className="mb-6">
          <span
            className="uppercase tracking-widest font-normal"
            style={{ fontSize: 12, color: "rgb(229,67,96)" }}
          >
            Tratamentos
          </span>
          <h2
            className="mt-1 font-medium leading-tight"
            style={{ fontSize: 32, color: "rgb(78,75,74)" }}
          >
            Tratamentos mais procurados na Onodera
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="transition-colors duration-200"
                style={{
                  borderRadius: 9999,
                  padding: "8px 20px",
                  fontSize: 14,
                  fontWeight: isActive ? 500 : 400,
                  background: isActive ? "rgb(229,67,96)" : "transparent",
                  color: isActive ? "white" : "rgb(78,75,74)",
                  border: isActive
                    ? "none"
                    : "1px solid rgb(243,242,242)",
                  cursor: "pointer",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        {treatments.length > 0 ? (
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.5}
            spaceBetween={16}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!pb-10"
          >
            {treatments.map((treatment) => (
              <SwiperSlide key={treatment.name}>
                <a
                  href="#"
                  className="block focus:outline-none"
                  aria-label={treatment.name}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      borderRadius: 0,
                      aspectRatio: "275/374",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      width={275}
                      height={374}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p
                    className="font-normal"
                    style={{
                      fontSize: 14,
                      color: "rgb(78,75,74)",
                      padding: "12px 0",
                    }}
                  >
                    {treatment.name}
                  </p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p
            className="text-center py-12"
            style={{ fontSize: 14, color: "rgb(118,113,112)" }}
          >
            Em breve
          </p>
        )}
      </div>
    </section>
  );
}
