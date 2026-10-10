import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import TodayDecrease from "@/components/TodayDecrease";
import TodayIncrease from "@/components/TodayIncrease";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
    
      
      <Suspense fallback={<div>লোড হচ্ছে...</div>}>
                <Banner />
            </Suspense>

            <Suspense fallback={<div>দাম লোড হচ্ছে...</div>}>
                <TodayIncrease />
            </Suspense>

            <Suspense fallback={<div>দাম লোড হচ্ছে...</div>}>
                <TodayDecrease />
            </Suspense>

            <Suspense fallback={<div>পণ্য লোড হচ্ছে...</div>}>
                <AllProducts />
            </Suspense>


    </>

  );
}
