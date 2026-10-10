
import Link from "next/link";
import React, { Suspense } from "react";
import { IoTriangleSharp } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";

interface PageProps {
  params: Promise<{ slug: string }>;
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

async function CategoryProducts({ params }: PageProps) {
  const { slug } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(slug)}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: IProduct[] = await res.json();

  return (
    <section>
      <div className="container mx-auto px-4 py-4">
        <h6 className="text-xl font-bold">সব পণ্য</h6>

        <p className="mb-4 text-gray-500">
          মোট {products.length}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <Link href={`/categorydetails/${item.id}`} key={item.id}>
              <div className="cursor-pointer rounded-2xl bg-gray-100 p-4 transition hover:shadow-md">
                <div className="flex items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl">
                    {item.categoryIcon}
                  </div>

                  <div>
                    <p className="font-semibold">{item.nameBn}</p>
                    <p className="text-sm text-gray-500">
                      প্রতি {item.unit}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  আজকের দাম
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">
                    {item.today} টাকা
                  </p>

                  <div className="flex items-center gap-1">
                    {item.change.dir === "down" ? (
                      <TbTriangleInvertedFilled className="text-green-600" />
                    ) : item.change.dir === "up" ? (
                      <IoTriangleSharp className="text-red-500" />
                    ) : null}

                    <p
                      className={
                        item.change.dir === "down"
                          ? "text-green-600"
                          : item.change.dir === "up"
                            ? "text-red-500"
                            : "text-gray-500"
                      }
                    >
                      {item.change.pct}%
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
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
