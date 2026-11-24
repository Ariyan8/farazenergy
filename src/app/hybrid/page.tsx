import CatalogPage from "../_solar/catalog-page";
import { catalogs } from "../_solar/catalogs";

export const metadata = {
  title: "پکیج‌های نیروگاه  خورشیدی هیبریدی (Hybrid) | فراز انرژی اطلس",
};

export default function HybridPage() {
  return <CatalogPage active="hybrid" catalog={catalogs.hybrid} />;
}
