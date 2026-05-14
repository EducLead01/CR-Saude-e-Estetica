"use client";

import Image from "next/image";

export function NewsletterSection() {
  return (
    <section className="border-t border-b border-[#F2D9DD] bg-[#FFF2F0] py-10">
      <div className="mx-auto w-full max-w-[1168px] px-4">
        <div className="flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-center">
          {/* Left column */}
          <div className="flex max-w-[510px] flex-col gap-2">
            <div className="flex flex-col gap-2 xl:flex-row xl:items-center xl:gap-4">
              <Image
                src="/images/newsletter-icon.webp"
                alt="Newsletter icon"
                width={77}
                height={80}
                className="shrink-0"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold text-[rgb(78,75,74)]">
                  Fique por dentro!
                </h2>
                <p className="text-sm text-[rgb(118,113,112)]">
                  Cadastre-se em nossa newsletter e fique por dentro das
                  novidades, promoções e dicas de beleza
                </p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <form
            className="flex flex-row items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              className="h-12 w-[300px] rounded-full border border-[#F2D9DD] bg-white px-6 text-sm text-[rgb(78,75,74)] outline-none placeholder:text-[rgb(178,174,173)] focus:border-[rgb(229,67,96)]"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-[rgb(231,72,30)] px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
