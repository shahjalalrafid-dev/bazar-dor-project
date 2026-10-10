import React from 'react'
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { IoTriangleSharp } from "react-icons/io5";
export interface IAllProducts {
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

const AllProducts = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data = await res.json();


    return (
        <section id='allproducts' className='px-7 mb-18'>
            <div className='container mx-auto'>
                <div className='flex gap-2 items-center'>

                    <h6 className='font-bold text-xl mt-10 mb-3'>সব পণ্য</h6>

                </div>
                <p className='text-gray-300 mb-4'>মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        data.map((item: IAllProducts, index: number) =>



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
                                        {
                                            item.change.dir === "up" ? (<IoTriangleSharp className='text-red-400' />) : item.change.dir === "down" ? (<TbTriangleInvertedFilled className='text-green-600' />) :  ("")
                                        }
                                        
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

export default AllProducts