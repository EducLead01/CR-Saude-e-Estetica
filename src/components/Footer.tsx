import Image from "next/image";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3.18 23.76c.3.17.64.24.99.19l13.2-11.57L13.8 8.8 3.18 23.76zM20.46 10.7l-2.65-1.52-3.55 3.11 3.55 3.11 2.67-1.53a1.56 1.56 0 0 0 0-3.17zM2.01 1.56A1.55 1.55 0 0 0 1.5 2.7v18.6c0 .47.18.89.51 1.14l.11.08L13.1 12.03v-.27L2.12 1.48l-.11.08zM3.18.24l10.62 14.97 3.57-3.12L4.17.05A1.56 1.56 0 0 0 3.18.24z" />
    </svg>
  );
}

const FOOTER_LINKS = [
  {
    title: "A Empresa",
    links: [
      { label: "Sobre a Onodera", href: "#" },
      { label: "Trabalhe Conosco", href: "#" },
      { label: "Franquia", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Tratamentos",
    links: [
      { label: "Tratamentos Corporais", href: "#" },
      { label: "Tratamentos Faciais", href: "#" },
      { label: "Depilação", href: "#" },
      { label: "Produtos", href: "#" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Encontre uma Unidade", href: "#" },
      { label: "Agende Online", href: "#" },
      { label: "Contato", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "LGPD", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      {/* Zona 1 — Top */}
      <div className="bg-[rgb(174,24,87)] pb-14 pt-10 text-white">
        <div className="mx-auto w-full max-w-[1168px] px-4">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
            {/* Logo + texto + social */}
            <div className="max-w-[320px]">
              <Image
                src="/images/logo.webp"
                alt="Onodera Estética"
                width={160}
                height={48}
                className="mb-3 brightness-0 invert"
              />
              <p className="mb-3 text-lg font-semibold leading-snug">
                Transformando vidas desde 1981
              </p>
              <p className="text-sm leading-[1.6] opacity-90">
                Começando como um pequeno negócio familiar e crescendo para se
                tornar referência nacional em estética e bem-estar no Brasil.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="transition-opacity hover:opacity-80"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="transition-opacity hover:opacity-80"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  aria-label="Youtube"
                  className="transition-opacity hover:opacity-80"
                >
                  <YoutubeIcon />
                </a>
              </div>

              {/* App badges */}
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-sm font-semibold">Baixe o app</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-xs font-medium transition-colors hover:bg-white/10"
                  >
                    <AppleIcon />
                    Apple Store
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-xs font-medium transition-colors hover:bg-white/10"
                  >
                    <GooglePlayIcon />
                    Google Play
                  </a>
                </div>
              </div>
            </div>

            {/* Zona 2 — Links em 4 colunas (dentro do mesmo fundo escuro) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/20 pt-8 xl:grid-cols-4 xl:border-t-0 xl:pt-0">
              {FOOTER_LINKS.map((col) => (
                <div key={col.title}>
                  <p className="mb-3 text-sm font-semibold text-white">
                    {col.title}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="block text-[13px] text-white/80 transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Zona 3 — Bottom */}
      <div className="border-t border-[rgb(227,227,227)] bg-white py-5">
        <div className="mx-auto w-full max-w-[1168px] px-4">
          <div className="flex flex-col items-start justify-between gap-3 text-[13px] text-[rgb(57,57,57)] sm:flex-row sm:items-center">
            <p>© 2024 Onodera Estética. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-colors hover:text-[rgb(229,67,96)]">
                Política de Privacidade
              </a>
              <span className="text-[rgb(200,200,200)]">|</span>
              <a href="#" className="transition-colors hover:text-[rgb(229,67,96)]">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
