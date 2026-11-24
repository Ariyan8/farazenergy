import Link from "next/link";
import s from "./solar.module.css";

export const services = [
  { id: "on-grid",           name: "آنگرید",           nameEn: "On-Grid",           label: "متصل به شبکه",      icon: "grid"    },
  { id: "off-grid",          name: "آفگرید",           nameEn: "Off-Grid",          label: "مستقل از شبکه",    icon: "battery" },
  { id: "hybrid",            name: "هیبریدی",          nameEn: "Hybrid",            label: "با باتری پشتیبان", icon: "bolt"    },
  { id: "agricultural-wells", name: "چاه‌های کشاورزی", nameEn: "Agricultural Wells", label: "پمپاژ خورشیدی",    icon: "water"   },
] as const;

const icons = {
  sun:     "M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  grid:    "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  battery: "M20 10v4M4 7h13a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm3 4v2m4-2v2m4-2v2",
  bolt:    "m13 2-8 11h6l-1 9 9-12h-6l1-8Z",
  water:   "M12 3c-2 3-6 7-6 11a6 6 0 0 0 12 0c0-4-4-8-6-11Z",
  arrow:   "M20 12H4m6-6-6 6 6 6",
};

export function Icon({ name }: { name: keyof typeof icons }) {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.65"
      strokeLinecap="round" strokeLinejoin="round">
      <path d={icons[name]} />
    </svg>
  );
}

export function SiteNav({ active }: { active?: string }) {
  return (
    <header className={s.top}>
      <div className={`${s.wrap} ${s.navInner}`}>
        <Link href="/" className={s.brand}>
          <span className={s.brandIcon}><Icon name="sun" /></span>
          فراز انرژی اطلس
        </Link>

        <nav aria-label="راهکارهای خورشیدی" className={s.nav}>
          {services.map(({ id, name, nameEn }) => (
            <Link
              key={id}
              href={`/${id}`}
              aria-current={active === id ? "page" : undefined}
            >
              {name}{" "}
              <bdi lang="en" dir="ltr" className={s.navEn}>({nameEn})</bdi>
            </Link>
          ))}
        </nav>

        <Link className={s.navContact} href="#consultation">تماس و مشاوره</Link>
      </div>
    </header>
  );
}

const phones = [
  ["02133974030", "۰۲۱-۳۳۹۷۴۰۳۰"],
  ["02133936050", "۰۲۱-۳۳۹۳۶۰۵۰"],
  ["02133948247", "۰۲۱-۳۳۹۴۸۲۴۷"],
  ["02133948248", "۰۲۱-۳۳۹۴۸۲۴۸"],
] as const;

export function Contact() {
  return (
    <footer id="consultation" className={s.contact}>
      <div className={`${s.wrap} ${s.contactInner}`}>
        <div>
          <p className={s.eyebrow}>دفتر مرکزی فراز انرژی اطلس</p>
          <h2>مشاوره و سفارش</h2>
          <address>
            <p>تهران، نیاوران، خیابان باهنر، نرسیده به میدان باهنر، پلاک ۵۴، طبقه سوم، واحد ۱۰۶</p>
            <ul className={s.phones}>
              {phones.map(([number, label]) => (
                <li key={number}>
                  <a href={`tel:+98${number.slice(1)}`} dir="ltr">{label}</a>
                </li>
              ))}
            </ul>
          </address>
        </div>

        <div className={s.contactActions}>
          <a className={s.primary} href="https://wa.me/989031005055">
            گفت‌وگو در واتساپ <Icon name="arrow" />
          </a>
          <a href="mailto:sales@farazenergy.ir" dir="ltr">sales@farazenergy.ir</a>
        </div>
      </div>
    </footer>
  );
}
