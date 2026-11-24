import Link from "next/link";
import { catalogs, formatNumber } from "./_solar/catalogs";
import { Contact, Icon, services, SiteNav } from "./_solar/site";
import s from "./_solar/solar.module.css";

export default function HomePage() {
  const total = Object.values(catalogs).reduce((sum, catalog) => sum + catalog.rows.length, 0);

  return (
    <div dir="rtl" className={s.site}>
      <SiteNav />
      <main>
        <section className={s.hero}>
          <div className={`${s.wrap} ${s.heroInner}`}>
            <div>
              <p className={s.eyebrow}>طراحی و اجرای سامانه‌های خورشیدی</p>
              <h1>فراز انرژی اطلس</h1>
              <p className={s.heroLead}>از نیروگاه متصل به شبکه تا برق پشتیبان و پمپاژ کشاورزی؛ راهکار مناسب پروژه‌ات را بر اساس نوع مصرف و دسترسی به شبکه پیدا کن.</p>
              <div className={s.actions}>
                <Link href="#solutions" className={s.primary}>مشاهده راهکارها <Icon name="arrow" /></Link>
                <Link href="#consultation" className={s.secondary}>مشاوره پروژه</Link>
              </div>
            </div>
            <aside className={s.heroPanel} aria-label="پکیج‌های نیروگاه خورشیدی در یک نگاه">
              <div className={s.panelTop}><span>کاتالوگ نیروگاه‌های خورشیدی</span><Icon name="sun" /></div>
              <p className={s.panelNumber}>{formatNumber(total)} <span>پکیج با مشخصات و قیمت</span></p>
              <div className={s.panelBreakdown}>
                {services.slice(0, 3).map(({ id, name }) => (
                  <Link href={`/${id}`} key={id}>{name}</Link>
                ))}
              </div>
            </aside>
          </div>
        </section>
        <section id="solutions" className={`${s.wrap} ${s.section}`} aria-labelledby="solutions-title">
          <p className={s.eyebrow}>محصولات و خدمات</p>
          <h2 id="solutions-title">راهکارهای انرژی خورشیدی</h2>
          <p className={s.intro}>مشخصات بسته‌ها را مقایسه کن یا برای طراحی سامانهٔ پمپاژ استعلام بگیر.</p>
          <div className={s.cards}>
            {services.map(({ id, name, label, icon }) => {
              const catalog = id === "agricultural-wells" ? null : catalogs[id];
              return (
                <Link key={id} href={`/${id}`} className={s.card}>
                  <div className={s.cardTop}><span className={s.cardIcon}><Icon name={icon} /></span><span className={s.badge}>{catalog ? `${formatNumber(catalog.rows.length)} پکیج` : "استعلام پروژه"}</span></div>
                  <h3>{catalog ? `نیروگاه ${name}` : name}</h3>
                  <p>{catalog?.subtitle ?? `${label} برای تأمین برق پمپ چاه و سامانهٔ آبیاری`}</p>
                  <span className={s.cardLink}>{catalog ? "مشاهده پکیج‌ها" : "مشاوره و استعلام"}<Icon name="arrow" /></span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Contact />
    </div>
  );
}
