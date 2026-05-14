"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quais tratamentos faciais a Onodera oferece?",
    answer:
      "A Onodera oferece uma ampla gama de tratamentos faciais, incluindo limpeza de pele, bioestimulador de colágeno, toxina botulínica (Botox), criofrequência facial, Morpheus Pro Facial, HIFU, exossomos e muito mais. Todos realizados por profissionais especializados.",
  },
  {
    question: "Como funciona o agendamento na Onodera?",
    answer:
      "Você pode agendar sua consulta pelo nosso site, pelo telefone ou diretamente na unidade mais próxima. O agendamento online está disponível 24 horas por dia, 7 dias por semana.",
  },
  {
    question: "A Onodera tem unidades em todo o Brasil?",
    answer:
      "Sim! Contamos com mais de 50 clínicas distribuídas pelo Brasil, presentes nos principais estados. Use nossa ferramenta de busca para encontrar a unidade mais próxima de você.",
  },
  {
    question: "Os tratamentos são seguros?",
    answer:
      "Todos os nossos tratamentos são realizados por profissionais qualificados e certificados, com equipamentos de última geração, seguindo rigorosos protocolos de segurança e higiene.",
  },
  {
    question: "Posso fazer mais de um tratamento na mesma sessão?",
    answer:
      "Sim, em muitos casos é possível combinar tratamentos. Consulte um de nossos especialistas para um plano personalizado que atenda às suas necessidades e objetivos.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[rgb(243,242,242)]">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full cursor-pointer items-center justify-between py-5 text-left text-base font-medium transition-colors duration-150 ${
          open ? "text-[rgb(229,67,96)]" : "text-[rgb(78,75,74)] hover:text-[rgb(229,67,96)]"
        }`}
        aria-expanded={open}
      >
        <span>{item.question}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <p className="pb-5 text-sm leading-[1.7] text-[rgb(118,113,112)]">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="bg-white pb-16 pt-10">
      <div className="mx-auto w-full max-w-[1168px] px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[rgb(229,67,96)]">
            FAQ
          </p>
          <h2 className="text-[32px] font-medium text-[rgb(78,75,74)]">
            Dúvidas Frequentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-[800px]">
          {FAQ_ITEMS.map((item) => (
            <FAQAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
