
import React, { Suspense } from "react";

import { IProduct } from "./product";
import CategoryProduct from "./CategoryProduct";
import { notFound } from "next/navigation";

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
    notFound();
  }
  

  const products : IProduct[]  = await res.json();
  if (!products || products.length === 0) {
    notFound();
  }

  return (
    <CategoryProduct products={products} />
    
  );
}

export default function CategoryItem({ params }: PageProps) {
  return (
    
      <CategoryProducts params={params} />
    
  );
}
