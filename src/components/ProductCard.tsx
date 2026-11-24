"use client";

import { useState } from "react";
import type { Package } from "@/lib/data";

interface Props {
  pkg: Package;
}

export default function ProductCard({ pkg }: Props) {
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const showImage = Boolean(pkg.image) && failedImage !== pkg.image;
  const englishName = pkg.nameEn?.trim();

  return (
    <article lang="fa" dir="rtl" className="fe-product fe-card flex flex-col">
      <div className="relative mb-5 aspect-video overflow-hidden rounded-xl bg-[var(--fe-soft)]">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={pkg.image}
            alt={pkg.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            onError={() => setFailedImage(pkg.image)}
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full items-center justify-center px-4 text-center font-bold text-[var(--fe-primary)]"
          >
            {pkg.name}
          </div>
        )}

        {pkg.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-[var(--fe-accent)] px-3 py-1 text-xs font-bold text-[var(--fe-dark)]">
            {pkg.badge}
          </span>
        )}
      </div>

      <h3 className="text-xl font-extrabold text-[var(--fe-deep)]">
        {pkg.name}
        {englishName && (
          <>
            {" "}
            <bdi lang="en" dir="ltr">({englishName})</bdi>
          </>
        )}
      </h3>

      <p className="fe-muted mt-1 text-sm">ظرفیت: {pkg.capacity}</p>

      <ul className="my-5 space-y-2">
        {pkg.features.map((feature, index) => (
          <li key={`${feature}-${index}`} className="flex items-baseline gap-2 text-sm">
            <span aria-hidden="true" className="font-bold text-[var(--fe-primary)]">
              ✓
            </span>
            <span className="fe-muted">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-[var(--fe-border)] pt-4">
        <a
          href="tel:+982133974030"
          aria-label={`تماس برای مشاوره درباره ${pkg.name}`}
          className="fe-action text-sm"
        >
          تماس برای مشاوره
        </a>
      </div>
    </article>
  );
}
