
import { notFound } from "next/navigation";
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
    notFound();
  }

  const products: IProductData = await res.json();

  if (!products) {
    notFound();
  }

  const markets: MarketInfo[] = products.markets ?? [];

  const minPrice = products.markets.reduce(
    (min, item) => item.min < min ? item.min : min,
    Infinity
  );

  const maxPrice = products.markets.reduce(
    (max, item) => item.max > max ? item.max : max,
    -Infinity
  );

  return (
    <>
      <section className="w-full">
        <div className="container mx-auto px-3 sm:px-5 md:px-7">
          <div className="flex min-h-36 w-full flex-col items-stretch justify-between gap-4 rounded-2xl bg-base-200 p-3 sm:p-4 md:flex-row md:items-center md:gap-4 md:px-5">

            {/* Left: Product information */}
            <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
              {/* Rice icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F0] text-2xl sm:h-16 sm:w-16 sm:text-3xl">
                <span>{products.image}</span>
              </div>

              {/* Product details */}
              <div className="min-w-0">
                <h2 className="break-words text-lg font-bold leading-tight text-[#202B22] sm:text-2xl">
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
            <div className="flex w-full shrink-0 flex-row items-center justify-between gap-2 self-center rounded-2xl bg-[#F0F5F0] px-4 py-3 sm:px-5 md:w-24 md:flex-col md:justify-center md:gap-1 md:px-2 md:py-4">
              <span className="text-xs text-[#687368] sm:text-sm md:text-xs">
                আজকের দাম
              </span>

              <strong className="text-2xl font-extrabold leading-none text-[#202B22] sm:text-3xl">
                {products.today}
              </strong>

              <span className="text-xs text-[#687368] md:text-[10px]">
                টাকা / {products.unit}
              </span>

              <span className="text-xs font-semibold md:text-[10px]">
                {products.change.dir === "up" ? (
                  <span className="text-red-500">
                    ▲ {products.change.pct}
                  </span>
                ) : products.change.dir === "down" ? (
                  <span className="text-green-500">
                    ▼ {products.change.pct}
                  </span>
                ) : (
                  ""
                )}
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[#E1E9E1] bg-[#FAFCFA] p-3 sm:p-4 md:p-5">
            {/* Section title */}
            <h2 className="mb-3 text-base font-bold text-[#253329]">
              দামের সারসংক্ষেপ
            </h2>

            {/* Summary cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {/* Minimum price */}
              <div className="flex min-h-22 flex-col justify-center rounded-2xl border border-[#E1E9E1] px-4 py-3 sm:px-5">
                <p className="text-xs text-[#37443A]">
                  সর্বনিম্ন দাম
                </p>

                <p className="mt-1 text-2xl font-extrabold leading-none text-green-600">
                  {products.markets.reduce(
                    (min, item) => item.min < min ? item.min : min,
                    Infinity
                  )}{" "}
                  <span className="text-sm font-normal">টাকা</span>
                </p>

                <p className="mt-1 text-[11px] text-[#37443A]">
                  সবচেয়ে কম দামের বাজার
                </p>
              </div>

              {/* Maximum price */}
              <div className="flex min-h-22 flex-col justify-center rounded-2xl border border-[#E1E9E1] px-4 py-3 sm:px-5">
                <p className="text-xs text-[#37443A]">
                  সর্বাধিক দাম
                </p>

                <p className="mt-1 text-2xl font-extrabold leading-none text-red-500">
                  {products.markets.reduce(
                    (max, item) => item.max > max ? item.max : max,
                    -Infinity
                  )}{" "}
                  <span className="text-sm font-normal">টাকা</span>
                </p>

                <p className="mt-1 text-[11px] text-[#37443A]">
                  সবচেয়ে বেশি দামের বাজার
                </p>
              </div>

              {/* Average price */}
              <div className="flex min-h-22 flex-col justify-center rounded-2xl border border-[#E1E9E1] px-4 py-3 sm:px-5">
                <p className="text-xs text-[#37443A]">
                  গড় দাম
                </p>

                <p className="mt-1 text-2xl font-extrabold leading-none text-green-600">
                  {(minPrice + maxPrice) / 2}{" "}
                  <span className="text-sm font-normal">টাকা</span>
                </p>

                <p className="mt-1 text-[11px] text-[#37443A]">
                  প্রতি কেজি-র হিসাবে
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto my-8 w-[calc(100%-1.5rem)] max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-3.5rem)] lg:w-full">
        <div className="w-full overflow-x-auto">
          <h3 className="px-3 py-4 text-center text-xl font-bold sm:px-4 sm:py-5 sm:text-2xl md:text-3xl">
            বাজারভিত্তিক আজকের দাম
          </h3>

          {markets.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-slate-500 sm:text-base">
              এই পণ্যের জন্য কোনো বাজারের তথ্য পাওয়া যায়নি।
            </p>
          ) : (
            <table className="w-full min-w-[560px] border-collapse text-left text-sm text-slate-700">
              <thead>
                <tr className="bg-slate-900 text-xs uppercase tracking-wider text-white">
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4 sm:py-3.5">
                    বাজার
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4 sm:py-3.5">
                    বিভাগ
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4 sm:py-3.5">
                    সর্বনিম্ন
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4 sm:py-3.5">
                    সর্বাধিক
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4 sm:py-3.5">
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
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">
                      {row.market}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">
                      {row.division}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">
                      {row.min} টাকা
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">
                      {row.max} টাকা
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">
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
