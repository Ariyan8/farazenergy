import { SolarPage } from "../_solar/catalog-page";
import s from "../_solar/solar.module.css";

export const metadata = { title: "پمپاژ خورشیدی چاه‌های کشاورزی | فراز انرژی اطلس" };

const details = [
  "توان، ولتاژ و تعداد فاز پمپ فعلی (ترجیحاً عکس پلاک پمپ)",
  "تراز آب هنگام پمپاژ، اختلاف ارتفاع تا محل تحویل و طول لوله",
  "حجم آب موردنیاز روزانه و ساعات کار پمپ",
  "محل پروژه و دسترسی به برق شبکه",
];

export default function AgriculturalWellsPage() {
  return (
    <SolarPage active="agricultural-wells" title="چاه‌های کشاورزی" subtitle="طراحی سامانه خورشیدی برای تأمین برق پمپ چاه و آبیاری">
      <section className={s.info}>
        <p className={s.eyebrow}>اطلاعات موردنیاز برای استعلام</p>
        <h2>طراحی و استعلام سامانه پمپاژ خورشیدی</h2>
        <p>تعداد پنل‌ها، تجهیزات و قیمت پس از بررسی مشخصات پمپ، ارتفاع پمپاژ و نیاز آبی پروژه تعیین می‌شوند. برای دریافت پیشنهاد، اطلاعات زیر را هنگام تماس یا از طریق واتساپ ارسال کنید:</p>
        <ul className={s.checklist}>
          {details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      </section>
    </SolarPage>
  );
}
