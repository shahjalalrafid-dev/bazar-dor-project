import React from 'react'
interface PageProps {
  params: Promise<{ slug: string }>; // In Next.js 15+, params is a Promise
}
interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
}
const CategoryItem = async({params}: PageProps) => {

        const {slug} = await params;
        const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`);
        const products = await res.json();
        console.log(products);





  return (
    <div>CategoryItem</div>
  )
}

export default CategoryItem