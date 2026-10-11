
import React, { Suspense } from "react";
import BannerImage from "../assets/bazar-hero.png";
import Image from "next/image";
import CurrentDate from "./CurrentDate";

const Banner = () => {
  return (
    <section className="px-3 sm:px-5 lg:px-7">
      <div className="container mx-auto">
        <div className="rounded-2xl sm:rounded-3xl bg-base-300 grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 lg:p-4 my-5 sm:my-7.5">

          {/* Banner Content */}
          <div className="min-w-0">
            <Suspense
              fallback={<h6>তারিখ লোড হচ্ছে...</h6>}
            >
              <button className="btn btn-sm sm:btn-md rounded-xl bg-[#E2F1E7] text-green-700 font-medium">
                <CurrentDate />
              </button>
            </Suspense>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-5 leading-snug">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <h2 className="text-sm sm:text-base md:text-lg mb-5 sm:mb-7 leading-relaxed">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
              বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
              দামের পরিবর্তন এক জায়গায়।
            </h2>

            <a href="#allproducts">
              <button className="btn btn-success text-white">
                সব পণ্য দেখুন
              </button>
            </a>
          </div>

          {/* Banner Image */}
          <div className="flex justify-center md:justify-self-end md:items-center mt-5 md:mt-0">
            <Image
              src={BannerImage}
              alt="বাজারের পণ্যের ব্যানার"
              width={300}
              height={250}
              priority
              className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
