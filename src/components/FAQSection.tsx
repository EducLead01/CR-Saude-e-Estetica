"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Pergunta 1",
    answer: "Resposta 1",
  },
  {
    question: "Pergunta 2",
    answer: "Resposta 2",
  },
  {
    question: "Pergunta 3",
    answer: "Resposta 3",
  },
  {
    question: "Pergunta 4",
    answer: "Resposta 4",
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
