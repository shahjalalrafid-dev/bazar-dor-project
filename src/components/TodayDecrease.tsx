import React from 'react'
import { TbTriangleInvertedFilled } from "react-icons/tb";

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

const TodayDecrease = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data = await res.json();
    const filteredData = data.filter((item: IIncrease) => item.change.dir === "down");



    return (
        <section>
            <div className='container mx-auto'>
                <div className='flex gap-2 items-center'>
                    <TbTriangleInvertedFilled  className='text-green-600' />
                    <h6 className='font-bold text-xl'>আজ দাম কমেছে</h6>

                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        filteredData.slice(0, 6).map((item: IIncrease, index: number) =>



                            <div key={index} className=' cursor-pointer bg-gray-400 rounded-2xl p-4'>
                                <div className='flex gap-2'>
                                    <div className='w-12 h-12 bg-base-200'>
                                        {item.categoryIcon}
                                    </div>
                                    <div>
                                        <p>{item.categoryNameBn}</p>
                                        <p>প্রতি কেজি</p>
                                    </div>

                                </div>
                                <p>আজকের দাম</p>
                                <div className='flex justify-between'>
                                    <p>{item.today} টাকা</p>
                                    <div className='flex items-center gap-1'>
                                        <TbTriangleInvertedFilled  className='text-green-600' />
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

export default TodayDecrease