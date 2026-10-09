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

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data = await res.json();
    const filteredData = data.filter((item: IIncrease) => item.change.dir === "up");




    return (
        <section>
            <div className='container mx-auto'>
                <div className='flex gap-2 items-center'>
                    <IoTriangleSharp className='text-red-400' />
                    <h6 className='font-bold text-xl'>আজ দাম বেড়েছে</h6>

                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        filteredData.slice(0,6).map((item: IIncrease, index: number) =>



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