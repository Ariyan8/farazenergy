import Link from "next/link";

const sections = [
  {
    href: "/on-grid",
    tag: "متصل به شبکه",
    title: "نیروگاه آنگرید",
    description: "تولید برق خورشیدی در کنار شبکه سراسری برای خانه‌ها و کسب‌وکارها.",
  },
  {
    href: "/off-grid",
    tag: "مستقل از شبکه",
    title: "نیروگاه آفگرید",
    description: "تأمین برق در باغ‌ها، ویلاها و مناطقی که به شبکه دسترسی ندارند.",
  },
  {
    href: "/hybrid",
    tag: "همراه با ذخیره‌ساز",
    title: "نیروگاه هیبریدی",
    description: "ترکیب پنل خورشیدی، شبکه و باتری برای مصرف روزانه و برق پشتیبان.",
  },
  {
    href: "/agricultural-wells",
    tag: "پمپاژ خورشیدی",
    title: "چاه‌های کشاورزی",
    description: "مقایسه پمپ‌های خورشیدی براساس قطر خروجی، عمق مدل و تعداد پنل.",
  },
];

export default function HomePage() {
  return (
    <main lang="fa" dir="rtl" className="fe-page">
      <header className="fe-hero">
        <div className="fe-wrap fe-hero-inner">
          <p className="fe-eyebrow">فراز انرژی اطلس | راهکارهای خورشیدی</p>

          <h1>
            نیروگاه‌های خورشیدی
            <br />
            <span>برای خانه، صنعت و کشاورزی</span>
          </h1>

          <p className="fe-intro">
            از تأمین برق ساختمان تا راه‌اندازی پمپ چاه، انتخاب سیستم از شناخت
            مصرف شما آغاز می‌شود. نوع کاربرد را انتخاب کنید و نمونه‌های آن را ببینید.
          </p>

          <a href="#solutions" className="fe-action mt-6">
            بررسی راهکارها <span aria-hidden="true" className="ms-2">↓</span>
          </a>
        </div>
      </header>

      <nav
        id="solutions"
        aria-labelledby="solutions-heading"
        className="fe-wrap fe-section scroll-mt-6"
      >
        <h2 id="solutions-heading" className="fe-heading">
          کدام سیستم برای پروژه شما مناسب است؟
        </h2>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <li key={section.href}>
              <Link href={section.href} className="fe-card fe-card-link">
                <span className="fe-tag">{section.tag}</span>
                <h3 className="text-xl font-extrabold">{section.title}</h3>
                <p className="fe-muted text-sm">{section.description}</p>

                <span className="mt-auto pt-3 text-sm font-bold text-[var(--fe-primary)]">
                  {section.href === "/agricultural-wells"
                    ? "مشاهده مدل‌های پمپ"
                    : "مشاهده ظرفیت‌ها"}
                  <span aria-hidden="true" className="ms-2">←</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
