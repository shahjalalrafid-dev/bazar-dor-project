

import React, { Suspense } from "react";
import ActiveNavlink from "./ActiveNavlink";

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
          {data.map((item, index) => (
            <ActiveNavlink key={index} item={item} />
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
