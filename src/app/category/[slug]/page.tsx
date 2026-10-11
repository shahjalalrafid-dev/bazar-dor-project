
import React, { Suspense } from "react";

import { IProduct } from "./product";
import CategoryProduct from "./CategoryProduct";

 interface PageProps {
  params: Promise<{ slug: string }>;
}


async function CategoryProducts({ params }: PageProps) {
  const { slug } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(slug)}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products : IProduct[]  = await res.json();


  return (
    <CategoryProduct products={products} />
    
  );
}

export default function CategoryItem({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8">
          পণ্যের তথ্য লোড হচ্ছে...
        </div>
      }
    >
      <CategoryProducts params={params} />
    </Suspense>
  );
}
