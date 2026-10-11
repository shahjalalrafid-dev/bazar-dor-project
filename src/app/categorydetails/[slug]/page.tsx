
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
    `https://openapi.programming-hero.com/api/bazardor/products/${encodeURIComponent(slug)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const products: IProductData = await res.json();
  const markets: MarketInfo[] = products.markets ?? [];
  const minPrice = products.markets.reduce((min, item) => item.min < min ? item.min : min , Infinity );
  const maxPrice = products.markets.reduce((max, item) => item.max > max ? item.max : max , -Infinity );

  return (
    <>

      <section className="w-full">
        <div className="container mx-auto px-4 sm:px-7">
          <div className="flex min-h-36 w-full items-center justify-between gap-4 rounded-2xl bg-base-200 p-4 sm:min-h-36 sm:px-5">

            {/* Left: Product information */}
            <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">

              {/* Rice icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F0] text-3xl sm:h-16 sm:w-16">
                <span>{products.image}</span>
              </div>

              {/* Product details */}
              <div className="min-w-0">
                <h2 className="text-lg font-bold leading-tight text-[#202B22] sm:text-2xl">
                  {products.nameBn}
                </h2>

                <p className="mt-1 text-xs text-[#707A71] sm:text-sm">
                  প্রতি {products.unit} {products.categoryNameBn}
                </p>

                <p className="mt-2 text-[11px] leading-relaxed text-[#303A31] sm:text-xs">
                  গতকালের তুলনায় আজ দাম{" "}
                  {products.today > products.yesterday
                    ? "বেড়েছে"
                    : products.today < products.yesterday
                      ? "কমেছে"
                      : "অপরিবর্তিত"}
                  {products.today !== products.yesterday &&
                    ` · ${Math.abs(products.today - products.yesterday)} টাকা`}
                </p>
              </div>
            </div>

            {/* Right: Price panel */}
            <div className="flex w-[88px] shrink-0 flex-col items-center justify-center gap-1 self-center rounded-2xl bg-[#F0F5F0] px-2 py-3 sm:w-24 sm:py-4">

              <span className="text-[10px] text-[#687368] sm:text-xs">
                আজকের দাম
              </span>

              <strong className="text-2xl font-extrabold leading-none text-[#202B22] sm:text-3xl">
                {products.today}
              </strong>

              <span className="text-[10px] text-[#687368] sm:text-xs">
                টাকা / {products.unit}
              </span>

              <span
                className={`text-[10px] font-semibold sm:text-xs`}
              >
                {products.change.dir === "up" ? <span className="text-red-500">▲ {products.change.pct}</span> : products.change.dir === "down" ? <span className="text-green-500">▼ {products.change.pct}</span> : ""   }
                
              </span>
            </div>

          </div>
          <div className="rounded-2xl border border-[#E1E9E1] bg-[#FAFCFA] p-4 sm:p-5 mt-5">
            {/* Section title */}
            <h2 className="mb-3 text-base font-bold text-[#253329]">
              দামের সারসংক্ষেপ
            </h2>

            {/* Summary cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {/* Minimum price */}
              <div className="flex min-h-22 flex-col justify-center rounded-2xl border border-[#E1E9E1] px-5 py-3">
                <p className="text-xs text-[#37443A]">
                  সর্বনিম্ন দাম
                </p>

                <p className="mt-1 text-2xl font-extrabold leading-none text-green-600">
                  {products.markets.reduce((min, item) => item.min < min ? item.min : min , Infinity) } <span className="text-sm font-normal">টাকা</span>
                </p>

                <p className="mt-1 text-[11px] text-[#37443A]">
                  সবচেয়ে কম দামের বাজার
                </p>
              </div>

              {/* Maximum price */}
              <div className="flex min-h-22 flex-col justify-center rounded-2xl border border-[#E1E9E1] px-5 py-3">
                <p className="text-xs text-[#37443A]">
                  সর্বাধিক দাম
                </p>

                <p className="mt-1 text-2xl font-extrabold leading-none text-red-500">
                  {products.markets.reduce((max, item) => item.max > max ? item.max : max , -Infinity) }  <span className="text-sm font-normal">টাকা</span>
                </p>

                <p className="mt-1 text-[11px] text-[#37443A]">
                  সবচেয়ে বেশি দামের বাজার
                </p>
              </div>

              {/* Average price */}
              <div className="flex min-h-22 flex-col justify-center rounded-2xl border border-[#E1E9E1] px-5 py-3">
                <p className="text-xs text-[#37443A]">
                  গড় দাম
                </p>

                <p className="mt-1 text-2xl font-extrabold leading-none text-green-600">
                  {(minPrice + maxPrice)/2} <span className="text-sm font-normal">টাকা</span>
                </p>

                <p className="mt-1 text-[11px] text-[#37443A]">
                  প্রতি কেজি-র হিসাবে
                </p>
              </div>

            </div>
          </div>


        </div>
      </section>

      <div className="mx-auto my-8 w-full max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
        <div className="overflow-x-auto">
          <h3 className="px-4 py-5 text-center text-2xl font-bold sm:text-3xl">
            বাজারভিত্তিক আজকের দাম
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
    </>
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
