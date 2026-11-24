export type PlantType = "on-grid" | "off-grid" | "hybrid";

export interface Package {
  id: string;
  name: string;
  nameEn?: string;
  type: PlantType;
  capacity: string;
  price: string;
  features: string[];
  image: string;
  badge?: string;
}

export const packages: Package[] = [
  // ---------- آنگرید (On-Grid) ----------
  {
    id: "og-5kw",
    name: "پکیج آنگرید ۵ کیلووات",
    nameEn: "On-Grid Package – 5 kW",
    type: "on-grid",
    capacity: "۵ کیلووات",
    price: "تماس بگیرید",
    features: [
      "پنل خورشیدی مونوکریستال",
      "اینورتر شبکه‌ای",
      "نصب و راه‌اندازی",
      "ضمانت ۱۲ ساله پنل",
    ],
    image: "/images/on-grid-5kw.jpg",
    badge: "پرفروش",
  },
  {
    id: "og-10kw",
    name: "پکیج آنگرید ۱۰ کیلووات",
    nameEn: "On-Grid Package – 10 kW",
    type: "on-grid",
    capacity: "۱۰ کیلووات",
    price: "تماس بگیرید",
    features: [
      "پنل خورشیدی مونوکریستال",
      "اینورتر شبکه‌ای سه‌فاز",
      "نصب و راه‌اندازی",
      "مانیتورینگ آنلاین",
    ],
    image: "/images/on-grid-10kw.jpg",
  },

  // ---------- آفگرید (Off-Grid) ----------
  {
    id: "offg-3kw",
    name: "پکیج آفگرید ۳ کیلووات",
    nameEn: "Off-Grid Package – 3 kW",
    type: "off-grid",
    capacity: "۳ کیلووات",
    price: "تماس بگیرید",
    features: [
      "پنل خورشیدی",
      "باتری لیتیوم",
      "شارژ کنترلر MPPT",
      "مناسب مناطق بدون برق",
    ],
    image: "/images/off-grid-3kw.jpg",
    badge: "پیشنهادی",
  },

  // ---------- هیبریدی (Hybrid) ----------
  {
    id: "hy-8kw",
    name: "پکیج هیبریدی ۸ کیلووات",
    nameEn: "Hybrid Package – 8 kW",
    type: "hybrid",
    capacity: "۸ کیلووات",
    price: "تماس بگیرید",
    features: [
      "پنل خورشیدی",
      "باتری ذخیره‌ساز",
      "اینورتر هیبریدی",
      "اتصال به شبکه + ذخیره انرژی",
    ],
    image: "/images/hybrid-8kw.jpg",
  },
];
