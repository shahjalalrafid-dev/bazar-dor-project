
import React from 'react';
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { IoTriangleSharp } from "react-icons/io5";
import Link from 'next/link';

export interface IAllProducts {
    categoryIcon: string,
    categoryNameBn: string,
    nameBn: string,
    unit: string,
    today: number,
    id: number,
    change: {
        dir: string;
        pct: number;
    }
}

const AllProducts = async () => {

    const res = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/products'
    );

    const data = await res.json();

    return (
        <section
            id='allproducts'
            className='px-3 sm:px-5 lg:px-7 mb-18'
        >
            <div className='container mx-auto'>

                {/* Section Heading */}
                <div className='flex gap-2 items-center'>
                    <h6 className='font-bold text-lg sm:text-xl mt-10 mb-3'>
                        সব পণ্য
                    </h6>
                </div>

                {/* Total Products */}
                <p className='text-gray-300 mb-4 text-sm sm:text-base'>
                    মোট {data.length}টি পণ্য দেখানো হচ্ছে
                </p>

                {/* Responsive Product Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'>

                    {data.map((item: IAllProducts) => (

                        <Link
                            href={`/categorydetails/${item.id}`}
                            key={item.id}
                            className='block min-w-0'
                        >

                            <div className='cursor-pointer bg-base-300 rounded-2xl p-3 sm:p-4 h-full'>

                                {/* Product Information */}
                                <div className='flex gap-2 items-center'>

                                    <div className='w-12 h-12 shrink-0 bg-base-200 relative rounded-lg flex items-center justify-center'>
                                        <p className='text-4xl'>
                                            {item.categoryIcon}
                                        </p>
                                    </div>

                                    <div className='min-w-0'>
                                        <p className='font-medium break-words'>
                                            {item.nameBn}
                                        </p>

                                        <p className='text-sm text-gray-500'>
                                            প্রতি কেজি
                                        </p>
                                    </div>

                                </div>

                                {/* Today's Price */}
                                <p className='mt-2 mb-1 text-sm sm:text-base'>
                                    আজকের দাম
                                </p>

                                <div className='flex justify-between items-center gap-2'>

                                    <p className='font-semibold'>
                                        {item.today} টাকা
                                    </p>

                                    <div className='flex items-center gap-1 shrink-0'>

                                        {item.change.dir === "up" ? (
                                            <IoTriangleSharp className='text-red-400 text-sm' />
                                        ) : item.change.dir === "down" ? (
                                            <TbTriangleInvertedFilled className='text-green-600 text-sm' />
                                        ) : null}

                                        <p className='text-sm sm:text-base'>
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
};

export default AllProducts;
