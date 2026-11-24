import CatalogPage from "../_solar/catalog-page";
import { catalogs } from "../_solar/catalogs";

export const metadata = {
  title: "پکیج‌های نیروگاه خورشیدی آنگرید (On-Grid) | فراز انرژی اطلس",
};

export default function OnGridPage() {
  return <CatalogPage active="on-grid" catalog={catalogs["on-grid"]} />;
}
