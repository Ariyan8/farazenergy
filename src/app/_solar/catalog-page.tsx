import Link from "next/link";
import type { ReactNode } from "react";
import { CatalogDownloads, type CatalogPdfKey } from "./catalog-downloads";
import { formatNumber } from "./catalogs";
import type { Catalog } from "./catalogs";
import { Contact, SiteNav } from "./site";
import s from "./solar.module.css";

export function SolarPage({ active, title, subtitle, children }: { active: string; title: string; subtitle: string; children: ReactNode }) {
  return (
    <div dir="rtl" className={s.site}>
      <SiteNav active={active} />
      <main>
        <header className={s.hero}>
          <div className={`${s.wrap} ${s.pageHero}`}>
            <p className={s.breadcrumb}><Link href="/">صفحه اصلی</Link><span aria-hidden="true">/</span><span>{title}</span></p>
            <h1>{title}</h1>
            <p className={s.heroLead}>{subtitle}</p>
          </div>
        </header>
        <div className={`${s.wrap} ${s.content}`}>{children}</div>
      </main>
      <Contact />
    </div>
  );
}

export default function CatalogPage({ active, catalog }: { active: CatalogPdfKey; catalog: Catalog }) {
  return (
    <SolarPage active={active} title={catalog.title} subtitle={catalog.subtitle}>
      <section className={s.sheet} aria-labelledby="package-title">
        <div className={s.sheetHeading}>
          <p className={s.eyebrow}>{formatNumber(catalog.rows.length)} پکیج در کاتالوگ</p>
          <h2 id="package-title">مشخصات و قیمت بسته‌ها</h2>
          <p>قیمت‌ها به ریال و طبق کاتالوگ هستند. پیش از سفارش، قیمت روز را استعلام کنید.</p>
          <p className={s.scrollHint}>برای دیدن همهٔ ستون‌ها، جدول را افقی جابه‌جا کنید.</p>
        </div>
        <div tabIndex={0} role="region" aria-labelledby="package-title" className={s.tableScroll}>
          <table className={s.table}>
            <thead>
              <tr>
                {["کد بسته", ...catalog.columns, "قیمت بسته (ریال)"].map((column) => (
                  <th key={column} scope="col">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {catalog.rows.map(({ code, specs, price }) => (
                <tr key={code}>
                  <th scope="row"><bdi dir="ltr" className={s.code}>{code}</bdi></th>
                  {specs.map((spec, index) => <td key={catalog.columns[index]}><bdi>{spec}</bdi></td>)}
                  <td className={s.price}><bdi>{formatNumber(price)}</bdi></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <CatalogDownloads catalog={active} />
      <div className={s.notes}>
        {catalog.notes.map(({ title, text }) => (
          <section key={title} className={s.info}>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
    </SolarPage>
  );
}
