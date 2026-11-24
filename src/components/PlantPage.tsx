import Link from "next/link";

type PumpModel = {
  outletInches: number;
  depthMeters: number;
  panelCount: number;
};

type PlantPageProps = {
  title: string;
  description: string;
  selectionNote: string;
} & (
  | {
      type: "hybrid" | "off-grid" | "on-grid";
      capacities: readonly number[];
    }
  | {
      type: "agricultural-wells";
      pumps: readonly PumpModel[];
    }
);

const categoryLabels = {
  hybrid: "متصل به شبکه با ذخیره‌ساز (Hybrid)",
  "off-grid": "مستقل از شبکه (Off-Grid)",
  "on-grid": "متصل به شبکه (On-Grid)",
  "agricultural-wells": "پمپاژ خورشیدی (Solar Pumping)",
};

const englishTitles = {
  hybrid: "Hybrid Solar Power Plant",
  "off-grid": "Off-Grid Solar Power Plant",
  "on-grid": "On-Grid Solar Power Plant",
  "agricultural-wells": "Solar Pumping for Agricultural Wells",
} satisfies Record<PlantPageProps["type"], string>;

const fa = new Intl.NumberFormat("fa-IR");

export default function PlantPage(props: PlantPageProps) {
  const isPumpPage = props.type === "agricultural-wells";

  const cards =
    props.type === "agricultural-wells"
      ? props.pumps.map(({ outletInches, depthMeters, panelCount }) => ({
          id: `${outletInches}-${depthMeters}-${panelCount}`,
          label: "قطر خروجی پمپ",
          value: `${fa.format(outletInches)} اینچ`,
          detail: `عمق درج‌شده در مدل: ${fa.format(depthMeters)} متر · ${fa.format(panelCount)} پنل`,
        }))
      : props.capacities.map((kw) => ({
          id: String(kw),
          label: "توان نامی پنل‌ها",
          value: `${fa.format(kw)} کیلووات`,
          detail: categoryLabels[props.type],
        }));

  return (
    <main lang="fa" dir="rtl" className="fe-page">
      <header className="fe-hero">
        <div className="fe-wrap fe-hero-inner">
          <Link href="/" className="fe-eyebrow hover:underline">
            فراز انرژی اطلس | راهکارهای خورشیدی{" "}
            <bdi lang="en" dir="ltr">
              (Faraz Energy Atlas | Solar Solutions)
            </bdi>
          </Link>

          <h1>
            {props.title}{" "}
            <bdi lang="en" dir="ltr">
              ({englishTitles[props.type]})
            </bdi>
          </h1>

          <p className="fe-intro">{props.description}</p>
        </div>
      </header>

      <div className="fe-wrap fe-section">
        <section aria-labelledby="models-heading">
          <h2 id="models-heading" className="fe-heading">
            {isPumpPage
              ? "مدل‌های نمونه پمپ خورشیدی"
              : `ظرفیت‌های نمونه ${props.title}`}
          </h2>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li key={card.id} className="fe-card">
                <span className="fe-tag">{card.label}</span>
                <h3 className="my-3 text-3xl font-black text-[var(--fe-deep)]">
                  {card.value}
                </h3>
                <p className="fe-muted text-sm">{card.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside className="fe-note" aria-labelledby="selection-heading">
          <h2
            id="selection-heading"
            className="mb-2 text-lg font-extrabold text-[var(--fe-deep)]"
          >
            {isPumpPage ? "راهنمای انتخاب پمپ" : "راهنمای انتخاب ظرفیت"}
          </h2>
          <p className="fe-muted">{props.selectionNote}</p>
        </aside>
      </div>
    </main>
  );
}
