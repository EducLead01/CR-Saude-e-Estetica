import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const BASE = process.cwd();

const assets = [
  // Logo
  { url: 'https://www.onodera.com.br/media/logo/default/logo.webp', dest: 'public/images/logo.webp' },
  // Favicon
  { url: 'https://www.onodera.com.br/media/favicon/default/favicon.jpg', dest: 'public/seo/favicon.jpg' },
  // Hero banners
  { url: 'https://www.onodera.com.br/media/responsivebannerslider/_1757618446.webp', dest: 'public/images/hero-banner-1.webp' },
  { url: 'https://www.onodera.com.br/media/responsivebannerslider/_1751549236.webp', dest: 'public/images/hero-banner-2.webp' },
  // Hero decorative
  { url: 'https://www.onodera.com.br/skin/frontend/yepcomm/v3/images/bannerslider/bg-decorative.png', dest: 'public/images/hero-bg-decorative.png' },
  { url: 'https://www.onodera.com.br/skin/frontend/yepcomm/v3/images/bannerslider/decorative.webp', dest: 'public/images/hero-decorative.webp' },
  // Vantagens icons
  { url: 'https://www.onodera.com.br/media/wysiwyg/widget/vantagens/mapa.webp', dest: 'public/images/vantagens-mapa.webp' },
  { url: 'https://www.onodera.com.br/media/wysiwyg/widget/vantagens/shop.webp', dest: 'public/images/vantagens-shop.webp' },
  { url: 'https://www.onodera.com.br/media/wysiwyg/widget/vantagens/franqueado.webp', dest: 'public/images/vantagens-franqueado.webp' },
  { url: 'https://www.onodera.com.br/media/wysiwyg/widget/vantagens/contato.webp', dest: 'public/images/vantagens-contato.webp' },
  // Map / institucional
  { url: 'https://www.onodera.com.br/media/wysiwyg/widget/institucional/mapa.webp', dest: 'public/images/mapa-brasil.webp' },
  // Testimonial
  { url: 'https://www.onodera.com.br/media/wysiwyg/widget/depoimentos/depoimento.webp', dest: 'public/images/depoimento.webp' },
  // Special offer banner
  { url: 'https://www.onodera.com.br/media/wysiwyg/Home-Onodera/T_tulo_588_x_834_px_.webp', dest: 'public/images/banner-tratamento-gratis.webp' },
  // About section images
  { url: 'https://www.onodera.com.br/media/wysiwyg/Home-Onodera/1_4.webp', dest: 'public/images/sobre-liberdade.webp' },
  { url: 'https://www.onodera.com.br/media/wysiwyg/Home-Onodera/2_4.webp', dest: 'public/images/sobre-momentos.webp' },
  { url: 'https://www.onodera.com.br/media/wysiwyg/Home-Onodera/3_4.webp', dest: 'public/images/sobre-historias.webp' },
  // Newsletter icon
  { url: 'https://www.onodera.com.br/media/wysiwyg/widget/newsletter/decorative.webp', dest: 'public/images/newsletter-icon.webp' },
  // Treatment products
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/o/n/onoderaimagemcorreta.jpg', dest: 'public/images/tratamento-crioSlim.jpg' },
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/_/o/_onodera__imagens_site_depila_o_01__408x555_.webp', dest: 'public/images/tratamento-onodepil.webp' },
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/_/o/_onodera__imagens_site_powershape_02__408x555_.webp', dest: 'public/images/tratamento-powershape.webp' },
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/_/o/_onodera__imagens_site_onorelax_03__408x555_.webp', dest: 'public/images/tratamento-onorelax.webp' },
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/_/o/_onodera__imagens_site_dreno_redux_03__408x555_.webp', dest: 'public/images/tratamento-drenoreducx.webp' },
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/_/o/_onodera__imagens_site_shapedetox__408_x555_.webp', dest: 'public/images/tratamento-shapedetox.webp' },
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/_/o/_onodera__imagens_site_laser_lavieen_01__408x555_.webp', dest: 'public/images/tratamento-lavieen.webp' },
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/_/o/_onodera__imagens_site_limpeza_de_pele_01__408x555_.webp', dest: 'public/images/tratamento-limpeza-pele.webp' },
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/_/o/_onodera__imagens_site_exossomos__408_x555_.webp', dest: 'public/images/tratamento-exossomos.webp' },
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/_/o/_onodera__imagens_site_morpheus__408_x555__2.webp', dest: 'public/images/tratamento-morpheus.webp' },
  { url: 'https://www.onodera.com.br/media/catalog/product/cache/1/small_image/275x374/9df78eab33525d08d6e5fb8d27136e95/_/o/_onodera__imagens_site_hydra_intense__408_x555_.webp', dest: 'public/images/tratamento-hydra-intense.webp' },
  // Blog thumbnails
  { url: 'https://www.onodera.com.br/media/magpleasure/mpblog/list_thumbnail_file/2/5/cache/1/370x445/ac7fca02c77817f9150e17969b74630a/259b6dbf28665d08942d6edcc636c06e.png', dest: 'public/images/blog-1.png' },
  { url: 'https://www.onodera.com.br/media/magpleasure/mpblog/list_thumbnail_file/0/0/cache/1/370x445/ac7fca02c77817f9150e17969b74630a/002835cb43b50ca5ef5f5431db3e58f9.png', dest: 'public/images/blog-2.png' },
  { url: 'https://www.onodera.com.br/media/magpleasure/mpblog/list_thumbnail_file/5/8/cache/1/370x445/ac7fca02c77817f9150e17969b74630a/584c040dfdce0612cb11dd6c989a5ca5.png', dest: 'public/images/blog-3.png' },
];

async function download(url, dest) {
  const fullDest = path.join(BASE, dest);
  mkdirSync(path.dirname(fullDest), { recursive: true });
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) { console.warn(`SKIP ${url} → ${res.status}`); return; }
  await pipeline(res.body, createWriteStream(fullDest));
  console.log(`OK  ${dest}`);
}

// Batch 4 at a time
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(a => download(a.url, a.dest)));
}
console.log('Done.');
