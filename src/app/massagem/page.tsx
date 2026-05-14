import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FAQSection } from "@/components/FAQSection";
import { MassagemHero } from "@/components/MassagemHero";

export const metadata: Metadata = {
  title: "Massagem Corporal | CR Saúde e Estética",
  description:
    "Descubra os benefícios da massagem corporal terapêutica e relaxante. Agende seu horário e cuide do seu bem-estar.",
};

export default function MassagemCorporalPage() {
  return (
    <>
      <Navbar />
      <main>
        <MassagemHero />

        {/* O que é */}
        <section className="py-14 bg-white">
          <div className="mx-auto w-full px-4" style={{ maxWidth: 1168 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "rgb(229,67,96)" }}
                >
                  O tratamento
                </p>
                <h2
                  className="font-semibold leading-tight mb-4"
                  style={{ fontSize: 32, color: "rgb(78,75,74)" }}
                >
                  O que é Massagem Corporal?
                </h2>
                <p
                  className="leading-relaxed mb-4"
                  style={{ fontSize: 15, color: "rgb(118,113,112)", lineHeight: 1.8 }}
                >
                  A massagem corporal é uma técnica terapêutica milenar que
                  combina movimentos rítmicos e pressão aplicada sobre músculos e
                  tecidos moles do corpo. É indicada para quem busca relaxamento
                  profundo, alívio de dores musculares e melhora da qualidade de
                  vida.
                </p>
                <p
                  style={{ fontSize: 15, color: "rgb(118,113,112)", lineHeight: 1.8 }}
                >
                  Nossos profissionais utilizam técnicas consagradas como
                  massagem sueca, drenagem linfática, pedras quentes e aromaterapia
                  para proporcionar uma experiência única e personalizada.
                </p>
              </div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#FFF2F0",
                  minHeight: 320,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="text-center p-12">
                  <div
                    className="mx-auto mb-4 flex items-center justify-center rounded-full"
                    style={{
                      width: 80,
                      height: 80,
                      background: "rgb(229,67,96)",
                    }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                  <p style={{ color: "rgb(174,24,87)", fontWeight: 600, fontSize: 18 }}>
                    Bem-estar completo
                  </p>
                  <p style={{ color: "rgb(118,113,112)", fontSize: 14, marginTop: 8 }}>
                    Corpo e mente em harmonia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="py-14" style={{ background: "#FFF2F0" }}>
          <div className="mx-auto w-full px-4" style={{ maxWidth: 1168 }}>
            <div className="text-center mb-10">
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: "rgb(229,67,96)" }}
              >
                Por que fazer
              </p>
              <h2
                className="font-semibold"
                style={{ fontSize: 32, color: "rgb(78,75,74)" }}
              >
                Benefícios da Massagem Corporal
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🧘",
                  title: "Redução do Estresse",
                  desc: "Diminui os níveis de cortisol e promove relaxamento profundo, aliviando ansiedade e tensão acumulada.",
                },
                {
                  icon: "💆",
                  title: "Alívio de Dores",
                  desc: "Trata dores musculares, contraturas e tensões no pescoço, ombros, costas e membros.",
                },
                {
                  icon: "🩸",
                  title: "Melhora da Circulação",
                  desc: "Estimula a circulação sanguínea e linfática, reduzindo inchaços e melhorando o metabolismo.",
                },
                {
                  icon: "✨",
                  title: "Pele Mais Bonita",
                  desc: "Aumenta a elasticidade da pele, combate a celulite e melhora a textura e aparência do corpo.",
                },
                {
                  icon: "😴",
                  title: "Qualidade do Sono",
                  desc: "Favorece um sono mais profundo e reparador, essencial para a recuperação do organismo.",
                },
                {
                  icon: "⚡",
                  title: "Mais Disposição",
                  desc: "Revitaliza a energia, melhora o humor e aumenta a sensação de bem-estar geral.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6"
                  style={{ border: "1px solid #F2D9DD" }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontSize: 16, color: "rgb(78,75,74)" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "rgb(118,113,112)", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modalidades */}
        <section className="py-14 bg-white">
          <div className="mx-auto w-full px-4" style={{ maxWidth: 1168 }}>
            <div className="text-center mb-10">
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: "rgb(229,67,96)" }}
              >
                Opções disponíveis
              </p>
              <h2
                className="font-semibold"
                style={{ fontSize: 32, color: "rgb(78,75,74)" }}
              >
                Modalidades de Massagem
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Massagem Relaxante",
                  duration: "50 min",
                  desc: "Movimentos suaves e envolventes para relaxamento profundo do corpo e mente. Ideal para estresse e tensão do dia a dia.",
                  badge: "Mais procurada",
                },
                {
                  title: "Massagem Terapêutica",
                  duration: "60 min",
                  desc: "Pressão firme em pontos estratégicos para alívio de dores musculares, contraturas e rigidez.",
                  badge: null,
                },
                {
                  title: "Drenagem Linfática",
                  duration: "50 min",
                  desc: "Técnica suave que estimula o sistema linfático, reduzindo retenção de líquidos e inchaços.",
                  badge: null,
                },
                {
                  title: "Massagem com Pedras Quentes",
                  duration: "70 min",
                  desc: "Pedras vulcânicas aquecidas combinadas com técnicas de massagem para relaxamento profundo e equilíbrio energético.",
                  badge: "Premium",
                },
              ].map((mod) => (
                <div
                  key={mod.title}
                  className="relative rounded-2xl p-6 flex gap-4"
                  style={{ border: "1.5px solid #F2D9DD" }}
                >
                  {mod.badge && (
                    <span
                      className="absolute top-4 right-4 text-xs font-medium text-white px-3 py-1 rounded-full"
                      style={{ background: "rgb(229,67,96)" }}
                    >
                      {mod.badge}
                    </span>
                  )}
                  <div
                    className="shrink-0 rounded-full flex items-center justify-center"
                    style={{
                      width: 48,
                      height: 48,
                      background: "rgba(229,67,96,0.1)",
                      color: "rgb(229,67,96)",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {mod.duration}
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ fontSize: 16, color: "rgb(78,75,74)" }}
                    >
                      {mod.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "rgb(118,113,112)", lineHeight: 1.7 }}>
                      {mod.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Agendamento */}
        <section
          id="agendar"
          className="py-16"
          style={{ background: "rgb(229,67,96)" }}
        >
          <div
            className="mx-auto w-full px-4 text-center"
            style={{ maxWidth: 640 }}
          >
            <h2
              className="font-semibold text-white mb-4"
              style={{ fontSize: 32 }}
            >
              Pronta para relaxar?
            </h2>
            <p
              className="text-white/80 mb-8"
              style={{ fontSize: 16, lineHeight: 1.7 }}
            >
              Agende sua sessão de massagem corporal e comece sua jornada de
              bem-estar com a CR Saúde e Estética.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center text-sm font-semibold px-8 py-4 transition-colors"
              style={{
                background: "white",
                color: "rgb(229,67,96)",
                borderRadius: 9999,
              }}
            >
              Agendar Minha Sessão
            </a>
          </div>
        </section>

        <NewsletterSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
