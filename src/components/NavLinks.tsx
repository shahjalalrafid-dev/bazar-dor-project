
import Link from "next/link";
import React, { Suspense } from "react";

export interface INav {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

async function CategoriesList() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: INav[] = await res.json();

  return (
    
      <section className="container mx-auto overflow-x-auto px-4 py-4">
        <div className="flex gap-7">
          {data.map((item) => (
            <Link
              href={`/category/${item.slug}`}
              key={item.id}
              className="shrink-0"
            >
              <div className="flex cursor-pointer items-center gap-1.5">
                <div className="text-xs">{item.icon}</div>
                <div className="text-xs font-semibold">{item.nameBn}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
 


  );
}

export default function NavLinks() {
  return (
    <Suspense
      fallback={
        <section className="container mx-auto px-4 py-4">
          ক্যাটাগরি লোড হচ্ছে...
        </section>
      }
    >
      <CategoriesList />
    </Suspense>
  );
}
