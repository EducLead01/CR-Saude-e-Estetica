import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CR Saúde e Estética Estética | Sua jornada de beleza e bem-estar",
  description:
    "Há mais de 40 anos oferecemos tratamentos estéticos corporais, faciais e de depilação. Mais de 50 clínicas distribuídas pelo Brasil.",
  icons: {
    icon: "/seo/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
