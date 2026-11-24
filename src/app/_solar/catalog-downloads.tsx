import { Icon } from "./site";
import s from "./solar.module.css";

const pdfs = {
  all: { title: " جامع نیروگاه‌های خورشیدی", file: "atlas-rounded-all.pdf" },
  "on-grid": { title: " Ongridکاتالوگ نیروگاه آنگرید", file: "atlas-rounded-ongrid.pdf" },
  "off-grid": { title: "Offgridکاتالوگ کاتالوگ نیروگاه آفگرید", file: "atlas-rounded-offgrid.pdf" },
  hybrid: { title: " Hybrid کاتالوگ نیروگاه هیبریدی", file: "atlas-rounded-hybrid.pdf" },
} as const;

type PdfKey = keyof typeof pdfs;
export type CatalogPdfKey = Exclude<PdfKey, "all">;

export function CatalogDownloads({ catalog }: { catalog?: CatalogPdfKey }) {
  const keys: readonly PdfKey[] = catalog ? [catalog] : ["all", "on-grid", "off-grid", "hybrid"];
  const basePath = process.env.PAGES_BASE_PATH || "";

  return (
    <section id="pdf-catalogs" className={s.info} aria-labelledby="pdf-catalogs-title">
      <p className={s.eyebrow}>نسخهٔ PDF</p>
      <h2 id="pdf-catalogs-title">دانلود کاتالوگ{catalog ? "" : "‌ها"}</h2>
      <div className={s.actions}>
        {keys.map((key) => {
          const { title, file } = pdfs[key];
          return (
            <a key={key} href={`${basePath}/catalogs/${file}`} download={file} className={s.primary}>
              {title} <Icon name="arrow" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
