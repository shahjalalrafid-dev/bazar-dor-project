import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import TodayDecrease from "@/components/TodayDecrease";
import TodayIncrease from "@/components/TodayIncrease";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
    
      
      
                <Banner />
            

            
                <TodayIncrease />
            

            
                <TodayDecrease />
            

            
                <AllProducts />
            


    </>

  );
}
