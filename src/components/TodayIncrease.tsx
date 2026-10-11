
import Link from 'next/link';
import React from 'react';
import { IoTriangleSharp } from "react-icons/io5";

export interface IIncrease {
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

const TodayIncrease = async () => {

    const res = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/products'
    );

    const data = await res.json();

    const filteredData = data.filter(
        (item: IIncrease) => item.change.dir === "up"
    );

    return (
        <section className='px-3 sm:px-5 lg:px-7'>
            <div className='container mx-auto'>

                {/* Section Heading */}
                <div className='flex gap-2 items-center mb-3'>
                    <IoTriangleSharp className='text-red-400 shrink-0' />
                    <h6 className='font-bold text-lg sm:text-xl'>
                        আজ দাম বেড়েছে
                    </h6>
                </div>

                {/* Responsive Product Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'>

                    {filteredData
                        .sort(
                            (a: IIncrease, b: IIncrease) =>
                                b.change.pct - a.change.pct
                        )
                        .slice(0, 6)
                        .map((item: IIncrease) => (

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
                                                প্রতি {item.unit}
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
                                            <IoTriangleSharp className='text-red-400 text-sm' />
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

export default TodayIncrease;
