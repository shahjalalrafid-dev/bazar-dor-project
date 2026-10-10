
import React, { Suspense } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export interface ChangeInfo {
  dir: string;
  pct: number;
}

export interface MarketInfo {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface IProductData {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: ChangeInfo;
  markets: MarketInfo[];
}

// Async component: fetches product details
async function CategoryDetailsContent({ params }: PageProps) {
  const { slug } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${encodeURIComponent(slug)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const products: IProductData = await res.json();
  const markets: MarketInfo[] = products.markets ?? [];

  return (
    <div className="mx-auto my-8 w-full max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
      <div className="overflow-x-auto">
        <h3 className="px-4 py-5 text-center text-2xl font-bold sm:text-3xl">
          {products.nameBn}
        </h3>

        {markets.length === 0 ? (
          <p className="px-4 py-8 text-center text-slate-500">
            এই পণ্যের জন্য কোনো বাজারের তথ্য পাওয়া যায়নি।
          </p>
        ) : (
          <table className="w-full border-collapse text-left text-sm text-slate-700">
            <thead>
              <tr className="bg-slate-900 text-xs uppercase tracking-wider text-white">
                <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                  বাজার
                </th>
                <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                  বিভাগ
                </th>
                <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                  সর্বনিম্ন
                </th>
                <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                  সর্বাধিক
                </th>
                <th className="whitespace-nowrap px-4 py-3.5 font-semibold">
                  গড়
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {markets.map((row, index) => (
                <tr
                  key={`${row.market}-${row.division}-${index}`}
                  className="transition-colors hover:bg-slate-50"
                >
                  <td className="whitespace-nowrap px-4 py-3">
                    {row.market}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {row.division}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {row.min} টাকা
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {row.max} টাকা
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {((row.min + row.max) / 2).toFixed(2)} টাকা
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// Suspense must wrap the async component
export default function CategoryDetails({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto my-8 max-w-5xl px-4 py-10 text-center">
          পণ্যের বিস্তারিত তথ্য লোড হচ্ছে...
        </div>
      }
    >
      <CategoryDetailsContent params={params} />
    </Suspense>
  );
}
