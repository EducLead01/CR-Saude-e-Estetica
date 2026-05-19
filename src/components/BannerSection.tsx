import { Img as Image } from "@/components/Img";

export function BannerSection() {
  return (
    <section className="py-6 pb-10">
      <div className="container">
        <a href="#" aria-label="Tratamento grátis — saiba mais">
          <Image
            src="/images/banner-tratamento-gratis.webp"
            alt="Ganhe um tratamento grátis na CR Saúde e Estética"
            width={1132}
            height={292}
            className="w-full"
            priority={false}
          />
        </a>
      </div>
    </section>
  );
}
