import PlantPage from "@/components/PlantPage";

export default function AgriculturalWellsPage() {
  return (
    <PlantPage
      type="agricultural-wells"
      title="پمپ‌های خورشیدی چاه‌های کشاورزی"
      description="این سیستم برق پمپ چاه را از پنل‌های خورشیدی تأمین می‌کند. مدل‌های سه‌فاز زیر را بر اساس قطر خروجی، عمق درج‌شده در نام مدل و تعداد پنل‌های همراه مقایسه کنید."
      pumps={[
        { outletInches: 1.25, depthMeters: 230, panelCount: 8 },
        { outletInches: 2, depthMeters: 150, panelCount: 8 },
        { outletInches: 3, depthMeters: 98, panelCount: 13 },
        { outletInches: 4, depthMeters: 66, panelCount: 16 },
      ]}
      selectionNote="برای انتخاب پمپ، ابتدا آب موردنیاز زمین را بر حسب مترمکعب در ساعت مشخص کنید. عمق درج‌شده در نام مدل به‌تنهایی نشان نمی‌دهد پمپ چه مقدار آب تحویل می‌دهد. اختلاف ارتفاع سطح آب هنگام پمپاژ تا محل تحویل، افت فشار لوله و فشار لازم برای آبیاری را در نظر بگیرید و آب‌دهی را در منحنی عملکرد همان مدل بررسی کنید."
    />
  );
}
