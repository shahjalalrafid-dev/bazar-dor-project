import Link from 'next/link';
import React from 'react'
import { TbTriangleInvertedFilled } from "react-icons/tb";

export interface IDecrease {
    categoryIcon: string,
    categoryNameBn: string,
    nameBn: string,
    unit: string,
    today: number,
    id: number
    change: {
        dir: string;
        pct: number;
    }


}

const TodayDecrease = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data = await res.json();
    const filteredData = data.filter((item: IDecrease) => item.change.dir === "down");



    return (
        <section className='px-7'>
            <div className='container mx-auto'>
                <div className='flex gap-2 items-center mt-10 mb-3'>
                    <TbTriangleInvertedFilled className='text-green-600' />
                    <h6 className='font-bold text-xl '>আজ দাম কমেছে</h6>

                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    {
                        filteredData.sort((a: IDecrease, b: IDecrease) => a.change.pct - b.change.pct).slice(0, 6).map((item: IDecrease, index: number) =>

                            <Link href={`/categorydetails/${item.id}`} key={item.id}>

                                <div key={index} className=' cursor-pointer bg-base-300 rounded-2xl p-4'>
                                    <div className='flex gap-2'>
                                        <div className='w-12 h-12 bg-base-200 relative'>
                                            <p className='w-full text-4xl absolute top-1'>{item.categoryIcon} </p>
                                        </div>
                                        <div>
                                            <p>{item.nameBn}</p>
                                            <p>প্রতি কেজি</p>
                                        </div>

                                    </div>
                                    <p className='mt-2 mb-1'>আজকের দাম</p>
                                    <div className='flex justify-between'>
                                        <p>{item.today} টাকা</p>
                                        <div className='flex items-center gap-1'>
                                            <TbTriangleInvertedFilled className='text-green-600' />
                                            <p>{item.change.pct}%</p>

                                        </div>
                                    </div>


                                </div>


                            </Link>






                        )

                    }







                </div>

            </div>
        </section>
    )
}

export default TodayDecrease