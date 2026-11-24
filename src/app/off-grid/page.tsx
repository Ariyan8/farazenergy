import CatalogPage from "../_solar/catalog-page";
import { catalogs } from "../_solar/catalogs";

export const metadata = { title: "پکیج‌های نیروگاه خورشیدی آفگرید | فراز انرژی اطلس" };

export default function OffGridPage() {
  return <CatalogPage active="off-grid" catalog={catalogs["off-grid"]} />;
}
