export type CatalogNote = { title: string; text: string };
export type CatalogRow = { code: string; specs: string[] };
export type Catalog = {
  title: string;
  subtitle: string;
  columns: string[];
  rows: CatalogRow[];
  notes: CatalogNote[];
};

const fa = new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 3 });
export const formatNumber = (value: number) => fa.format(value);
const kw = (value: number) => `${formatNumber(value)} کیلووات`;
const kwh = (value: number) => `${formatNumber(value)} کیلووات‌ساعت`;
const panels = (count: number, watts: number) =>
  `${formatNumber(count)} عدد پنل ${formatNumber(watts)} واتی`;

const onGridSpecs: [number, number, number, string][] = [
  [5, 8, 625, "۵"],
  [10, 16, 625, "۱۰"],
  [15, 20, 720, "۱۵"],
  [20, 28, 720, "۲۰"],
  [35, 48, 720, "۲۰ + ۱۵"],
  [50, 70, 720, "۵۰"],
  [70, 98, 720, "۵۰ + ۲۰"],
  [100, 138, 720, "۲ × ۵۰"],
  [150, 208, 720, "۳ × ۵۰"],
];

const offGridSpecs: [number, number, number, number][] = [
  [6, 10, 6.25, 1],
  [12, 20, 12.5, 2],
  [18, 30, 18.75, 3],
];

const hybridSpecs: [number, number, number, number][] = [
  [12, 20, 625, 20],
  [15, 22, 720, 25],
  [20, 28, 720, 30],
  [30, 44, 720, 50],
  [40, 56, 720, 60],
  [75, 104, 720, 125],
];

export const catalogs: Record<"on-grid" | "off-grid" | "hybrid", Catalog> = {
  "on-grid": {
    title: "نیروگاه خورشیدی آنگرید (On-Grid)",
    subtitle: "متصل به شبکه برق | ۵ تا ۱۵۰ کیلووات",
    columns: ["توان نامی", "تعداد و توان پنل", "اینورتر (کیلووات)", "فاز"],
    rows: onGridSpecs.map(([power, count, watts, inverter]) => ({
      code: `ONG-${power}KW`,
      specs: [kw(power), panels(count, watts), inverter, power === 5 ? "تک‌فاز" : "سه‌فاز"],
    })),
    notes: [
      {
        title: "تجهیزات و خدمات مشترک بسته‌ها",
        text: "پنل دوطرفه مونوکریستال N-Type TOPCon، سازه بامی گالوانیزه گرم، تابلوهای DC و AC، ملزومات الکتریکی، طراحی، نصب، راه‌اندازی و اتصال به تابلو برق مجموعه. برندهای اینورتر در کاتالوگ: Growatt، KACO و SolaX.",
      },
      {
        title: "درآمد از فروش برق",
        text: "فروش برق تولیدی در قالب قرارداد خرید تضمینی قابل بررسی است. برای نیروگاه‌های بالای ۱۰۰ کیلووات، عرضه در تابلوی برق سبز بورس انرژی نیز با احراز شرایط پذیرش قابل بررسی است.",
      },
      {
        title: "تأمین سهم برق تجدیدپذیر صنایع و دستگاه‌های اجرایی",
        text: "صنایع و دستگاه‌های اجرایی مشمول می‌توانند با تأمین سهم مقرر برق تجدیدپذیر، هزینه ناشی از کسری سهم را کاهش دهند. میزان قابل احتساب به مصرف، تولید تأییدشده و مقررات دوره بستگی دارد.",
      },
    ],
  },
  "off-grid": {
    title: "نیروگاه خورشیدی آفگرید (Off-Grid)",
    subtitle: "مستقل از شبکه برق | ۶ تا ۱۸ کیلووات",
    columns: ["ظرفیت نیروگاه", "تعداد و توان پنل", "توان کل پنل‌ها", "سانورتر ۶ کیلوواتی", "تعداد باتری", "ظرفیت کل باتری‌ها"],
    rows: offGridSpecs.map(([power, count, arrayPower, units]) => ({
      code: `OFF-${power}KW`,
      specs: [kw(power), panels(count, 625), kw(arrayPower), `${formatNumber(units)} عدد`, `${formatNumber(units)} عدد`, kwh(5 * units)],
    })),
    notes: [
      {
        title: "تجهیزات مشترک بسته‌ها",
        text: "پنل‌های ۶۲۵ واتی Trina Solar یا JinkoSolar، سانورتر و باتری Growatt و سازه بامی دو ردیفه از فولاد گالوانیزه گرم.",
      },
      {
        title: "برق خورشیدی پس از غروب",
        text: "باتری انرژی تولیدشده در روز را برای مصرف شب ذخیره می‌کند. هنگام انتخاب بسته، توان هم‌زمان وسایل را با توان سانورتر و مصرف شبانه را با ظرفیت قابل‌استفاده باتری مقایسه کنید.",
      },
    ],
  },
  hybrid: {
    title: "نیروگاه خورشیدی هیبریدی (Hybrid)",
    subtitle: "متصل به شبکه با باتری پشتیبان | ۱۲ تا ۷۵ کیلووات",
    columns: ["تعداد و توان پنل", "توان اینورتر", "فاز", "ظرفیت باتری"],
    rows: hybridSpecs.map(([power, count, watts, battery]) => ({
      code: `HYB-${power}KW`,
      specs: [panels(count, watts), kw(power), power === 12 ? "تک‌فاز" : "سه‌فاز", kwh(battery)],
    })),
    notes: [
      {
        title: "تجهیزات و خدمات مشترک بسته‌ها",
        text: "پنل دوطرفه N-Type TOPCon، اینورتر هیبریدی Growatt و باتری‌های ۵ کیلووات‌ساعتی Growatt Hope 5.0L-B1. قیمت بسته شامل سازه بامی فولادی گالوانیزه گرم، تابلوها، ملزومات، طراحی، نصب و راه‌اندازی است.",
      },
      {
        title: "پشتیبانی هنگام قطع شبکه",
        text: "برای انتخاب بسته، ابتدا وسایل ضروری و توان مصرفی آن‌ها را مشخص کنید. مدت پشتیبانی به مصرف این وسایل و میزان شارژ باتری بستگی دارد.",
      },
    ],
  },
};
