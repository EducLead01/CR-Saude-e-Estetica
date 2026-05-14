const stats = [
  {
    number: "44 anos",
    description:
      "Mais de 40 anos de experiência em estética e bem-estar, sempre inovando e cuidando de você",
  },
  {
    number: "Mais de 1.500 funcionários",
    description: "Profissionais qualificados e apaixonados pelo que fazem",
  },
  {
    number: "Mais de 50 clínicas",
    description:
      "Distribuídas pelo Brasil para você ter sempre uma Onodera perto",
  },
];

export function StatsSection() {
  return (
    <section
      className="bg-white"
      style={{ padding: "40px 0 64px 0" }}
      aria-label="Números Onodera"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, index) => {
            const isLast = index === stats.length - 1;
            return (
              <div
                key={stat.number}
                className={[
                  "flex flex-col items-center text-center md:items-start md:text-left px-0 md:px-8",
                  !isLast
                    ? "md:border-r md:border-[rgb(243,242,242)]"
                    : "",
                ].join(" ")}
              >
                <span
                  className="font-bold leading-none"
                  style={{
                    fontSize: 48,
                    color: "rgb(229,67,96)",
                  }}
                >
                  {stat.number}
                </span>
                <p
                  className="mt-2 leading-relaxed"
                  style={{
                    fontSize: 14,
                    color: "rgb(118,113,112)",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
