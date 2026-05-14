"use client";

import { useState } from "react";

const ESTADOS = [
  "SP", "RJ", "MG", "RS", "PR", "SC", "BA", "GO", "DF", "CE", "PE",
] as const;

const CIDADES = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre",
  "Florianópolis", "Salvador", "Goiânia", "Brasília", "Fortaleza", "Recife",
] as const;

const TRATAMENTOS = [
  "CrioSlim", "Onodepil", "Morpheus", "Limpeza de Pele", "DrenoRedux", "Shape Detox",
] as const;

export function SearchSection() {
  const [estado, setEstado] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [tratamento, setTratamento] = useState<string>("");

  function handleBuscar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Busca intencional: integração futura
  }

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto w-full max-w-[1168px] px-4">
        {/* Header */}
        <div className="border-b border-[rgba(91,93,166,0.3)] pb-8">
          <h2
            className="mb-2 text-[28px] font-medium leading-tight"
            style={{ color: "rgb(91,93,166)" }}
          >
            O que você procura?!
          </h2>
          <p className="text-base" style={{ color: "rgb(78,75,74)" }}>
            Nosso mecanismo de busca ajuda a encontrar o seu tratamento ideal
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleBuscar}
          className="mt-8 flex flex-col gap-4 md:flex-row md:items-center"
        >
          {/* Select Estado */}
          <div className="relative flex-1">
            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="h-12 w-full cursor-pointer appearance-none rounded-full border-[1.5px] bg-white pl-5 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-[rgb(91,93,166)]"
              style={{
                borderColor: "rgb(91,93,166)",
                color: estado ? "rgb(78,75,74)" : "rgb(150,146,145)",
              }}
            >
              <option value="" disabled>
                Estado
              </option>
              {ESTADOS.map((uf) => (
                <option key={uf} value={uf} className="text-[rgb(78,75,74)]">
                  {uf}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
          </div>

          {/* Select Cidade */}
          <div className="relative flex-1">
            <select
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="h-12 w-full cursor-pointer appearance-none rounded-full border-[1.5px] bg-white pl-5 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-[rgb(91,93,166)]"
              style={{
                borderColor: "rgb(91,93,166)",
                color: cidade ? "rgb(78,75,74)" : "rgb(150,146,145)",
              }}
            >
              <option value="" disabled>
                Cidade
              </option>
              {CIDADES.map((c) => (
                <option key={c} value={c} className="text-[rgb(78,75,74)]">
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
          </div>

          {/* Select Tratamento */}
          <div className="relative flex-1">
            <select
              value={tratamento}
              onChange={(e) => setTratamento(e.target.value)}
              className="h-12 w-full cursor-pointer appearance-none rounded-full border-[1.5px] bg-white pl-5 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-[rgb(91,93,166)]"
              style={{
                borderColor: "rgb(91,93,166)",
                color: tratamento ? "rgb(78,75,74)" : "rgb(150,146,145)",
              }}
            >
              <option value="" disabled>
                Tratamento
              </option>
              {TRATAMENTOS.map((t) => (
                <option key={t} value={t} className="text-[rgb(78,75,74)]">
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
          </div>

          {/* Botão Buscar */}
          <button
            type="submit"
            className="h-12 cursor-pointer rounded-full px-8 text-base font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
            style={{ backgroundColor: "rgb(229,67,96)" }}
          >
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(91,93,166)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
