import { Img as Image } from "@/components/Img";


interface ListItem {
  title: string;
  description: string;
}

const LISTA_ITENS: ListItem[] = [
  {
    title: "Espaços especializados",
    description:
      "Nossas unidades contam com ambientes adequados para procedimentos estéticos",
  },
  {
    title: "Equipe capacitada",
    description:
      "Profissionais treinados e certificados para os mais variados tratamentos",
  },
  {
    title: "Tecnologia avançada",
    description:
      "Equipamentos de última geração para melhores resultados",
  },
];

export function LocationsSection() {
  return (
    <section className="w-full bg-white pb-14 pt-8">
      <div className="mx-auto w-full max-w-[1168px] px-4">

        {/* Duas colunas: texto + mapa */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* Coluna esquerda */}
          <div className="flex-1">
            <h2
              className="mb-3 text-3xl font-semibold leading-tight"
              style={{ color: "rgb(78,75,74)" }}
            >
              Sempre há uma CR Saúde e Estética próxima a você!
            </h2>
            <p
              className="mb-8 text-base"
              style={{ color: "rgb(118,113,112)" }}
            >
              São mais de 50 clínicas distribuídas pelo Brasil
            </p>

            {/* Lista numerada */}
            <ol className="flex flex-col gap-6">
              {LISTA_ITENS.map((item, index) => (
                <li key={item.title} className="flex items-start gap-4">
                  {/* Número badge */}
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                    style={{
                      color: "#6C3175",
                      backgroundColor: "rgba(108,49,117,0.1)",
                    }}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p
                      className="text-base font-semibold"
                      style={{ color: "rgb(78,75,74)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-1 text-sm"
                      style={{ color: "rgb(118,113,112)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Coluna direita — mapa */}
          <div className="mx-auto w-full max-w-[500px] lg:mx-0 lg:shrink-0">
            <Image
              src="/images/mapa-brasil.webp"
              alt="Mapa do Brasil com localização das clínicas CR Saúde e Estética"
              width={538}
              height={610}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
