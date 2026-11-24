export type PlantType = "on-grid" | "off-grid" | "hybrid";

export interface Package {
  id: string;
  name: string;
  nameEn?: string;
  type: PlantType;
  capacity: string;
  features: string[];
  image: string;
  badge?: string;
}

export const packages: Package[] = [
  // ---------- آنگرید ----------
  {
    id: "og-5kw",
    name: "پکیج آنگرید ۵ کیلووات",
    nameEn: "On-Grid 5 kW",
    type: "on-grid",
    capacity: "۵ کیلووات",
    features: [
      "پنل خورشیدی مونوکریستال",
      "اینورتر شبکه‌ای",
      "نصب و راه‌اندازی",
      "ضمانت ۱۲ ساله پنل",
    ],
    image: "/images/on-grid-5kw.webp",
    badge: "پرفروش",
  },
  {
    id: "og-10kw",
    name: "پکیج آنگرید ۱۰ کیلووات",
    nameEn: "On-Grid 10 kW",
    type: "on-grid",
    capacity: "۱۰ کیلووات",
    features: [
      "پنل خورشیدی مونوکریستال",
      "اینورتر شبکه‌ای سه‌فاز",
      "نصب و راه‌اندازی",
      "مانیتورینگ آنلاین",
    ],
    image: "/images/on-grid-10kw.webp",
  },

  // ---------- آفگرید ----------
  {
    id: "offg-3kw",
    name: "پکیج آفگرید ۳ کیلووات",
    nameEn: "Off-Grid 3 kW",
    type: "off-grid",
    capacity: "۳ کیلووات",
    features: [
      "پنل خورشیدی",
      "باتری لیتیوم",
      "شارژ کنترلر MPPT",
      "مناسب مناطق بدون برق",
    ],
    image: "/images/off-grid-3kw.webp",
    badge: "پیشنهادی",
  },

  // ---------- هیبریدی ----------
  {
    id: "hy-8kw",
    name: "پکیج هیبریدی ۸ کیلووات",
    nameEn: "Hybrid 8 kW",
    type: "hybrid",
    capacity: "۸ کیلووات",
    features: [
      "پنل خورشیدی",
      "باتری ذخیره‌ساز",
      "اینورتر هیبریدی",
      "اتصال به شبکه + ذخیره انرژی",
    ],
    image: "/images/hybrid-8kw.webp",
  },
];
