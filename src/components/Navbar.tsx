"use client";

import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-20"
      style={{
        background: "rgb(250,250,250)",
        borderBottom: "1px solid #F2D9DD",
      }}
    >
      {/* Top bar */}
      <div
        className="hidden md:flex items-center justify-end gap-4 px-6"
        style={{ maxWidth: 1168, margin: "0 auto", height: 36 }}
      >
        <a
          href="#"
          className="text-sm font-normal text-white transition-opacity hover:opacity-80 px-5 py-1.5"
          style={{
            background: "rgb(229,67,96)",
            borderRadius: 9999,
          }}
        >
          Agendar Online
        </a>
      </div>

      {/* Main nav */}
      <div
        className="flex items-center justify-between px-6 md:px-6"
        style={{
          maxWidth: 1168,
          margin: "0 auto",
          height: 64,
        }}
      >
        {/* Mobile: hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? (
            <X size={22} style={{ color: "rgb(78,75,74)" }} />
          ) : (
            <Menu size={22} style={{ color: "rgb(78,75,74)" }} />
          )}
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7 flex-1">
          {/* Tratamentos dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm font-normal transition-colors hover:opacity-70"
              style={{ color: "rgb(78,75,74)" }}
              onClick={() => setTreatmentsOpen((v) => !v)}
              onBlur={() => setTimeout(() => setTreatmentsOpen(false), 150)}
            >
              Tratamentos
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${treatmentsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {treatmentsOpen && (
              <div
                className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-xl py-2 min-w-[180px] z-30"
                style={{ border: "1px solid #F2D9DD" }}
              >
                {[
                  "Depilação a Laser",
                  "Limpeza de Pele",
                  "Peeling",
                  "Estética Corporal",
                  "Ver Todos",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm transition-colors hover:bg-[#F2D9DD]"
                    style={{ color: "rgb(78,75,74)" }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Search icon (desktop) */}
        <button
          className="hidden md:flex items-center justify-center w-9 h-9 transition-opacity hover:opacity-70"
          aria-label="Buscar"
        >
          <Search size={18} style={{ color: "rgb(78,75,74)" }} />
        </button>

        {/* Mobile: agendar button (right side) */}
        <a
          href="#"
          className="md:hidden text-xs font-normal text-white px-4 py-1.5 transition-opacity hover:opacity-80"
          style={{
            background: "rgb(229,67,96)",
            borderRadius: 9999,
          }}
        >
          Agendar
        </a>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgb(250,250,250)",
            borderTop: "1px solid #F2D9DD",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            <button
              className="flex items-center gap-1 text-sm font-normal text-left transition-colors hover:opacity-70"
              style={{ color: "rgb(78,75,74)" }}
              onClick={() => setTreatmentsOpen((v) => !v)}
            >
              Tratamentos
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${treatmentsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {treatmentsOpen && (
              <div className="flex flex-col gap-2 pl-4">
                {[
                  "Depilação a Laser",
                  "Limpeza de Pele",
                  "Peeling",
                  "Estética Corporal",
                  "Ver Todos",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: "rgb(78,75,74)" }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
            <hr style={{ borderColor: "#F2D9DD" }} />
            <a
              href="#"
              className="text-sm font-normal transition-opacity hover:opacity-70"
              style={{ color: "rgb(78,75,74)" }}
            >
              Seja um Franqueado
            </a>
            <a
              href="#"
              className="self-start text-sm font-normal text-white px-5 py-2 transition-opacity hover:opacity-80"
              style={{
                background: "rgb(229,67,96)",
                borderRadius: 9999,
              }}
            >
              Agendar Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
