'use client';

import Link from "next/link";
import { IoWarningOutline, IoHomeOutline, IoArrowBackOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center">
        {/* Icon Container with subtle pulse animation */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-sm ring-1 ring-red-100">
          <IoWarningOutline className="h-10 w-10 animate-pulse" />
        </div>

        {/* Status Code & Heading */}
        <span className="mb-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600">
          ৪o৪ ত্রুটি (Error 404)
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          পণ্য বা পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h1>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ রয়েছে।
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full">
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <IoHomeOutline className="h-4 w-4" />
            হোম পেজে ফিরে যান
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <IoArrowBackOutline className="h-4 w-4" />
            আগের পৃষ্ঠায় যান
          </button>
        </div>
      </div>
    </main>
  );
}