import React from 'react'
import { IoTriangleSharp } from "react-icons/io5";
export interface IIncrease {
    categoryIcon: string,
    categoryNameBn: string,
    nameBn: string,
    unit: string,
    today: number,
    change: {
        dir: string;
        pct: number;
    }


}

const TodayIncrease = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data = await res.json();
    const filteredData = data.filter((item: IIncrease) => item.change.dir === "up");
   




    return (
        <section className='px-7'>
            <div className='container mx-auto'>
                <div className='flex gap-2 items-center mb-3'>
                    <IoTriangleSharp className='text-red-400' />
                    <h6 className='font-bold text-xl '>আজ দাম বেড়েছে</h6>

                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        filteredData.sort((a:IIncrease ,b:IIncrease) => b.change.pct - a.change.pct ).slice(0,6).map((item: IIncrease, index: number) =>



                            <div key={index} className=' cursor-pointer bg-base-300 rounded-2xl p-4'>
                                <div className='flex gap-2'>
                                    <div className='w-12 h-12 bg-base-200 relative'>
                                        <p className='w-full text-4xl absolute top-1'>{item.categoryIcon} </p>
                                    </div>
                                    <div>
                                        <p>{item.nameBn}</p>
                                        <p>প্রতি {item.unit}</p>
                                    </div>

                                </div>
                                <p className='mt-2 mb-1'>আজকের দাম</p>
                                <div className='flex justify-between'>
                                    <p>{item.today} টাকা</p>
                                    <div className='flex items-center gap-1'>
                                        <IoTriangleSharp className='text-red-400' />
                                        <p>{item.change.pct}%</p>

                                    </div>
                                </div>


                            </div>




                        )

                    }




                    


                </div>

            </div>
        </section>
    )
}

export default TodayIncrease