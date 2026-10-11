
import Link from 'next/link';
import React from 'react';
import { TbTriangleInvertedFilled } from "react-icons/tb";

export interface IDecrease {
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

const TodayDecrease = async () => {

    const res = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/products'
    );

    const data = await res.json();

    const filteredData = data.filter(
        (item: IDecrease) => item.change.dir === "down"
    );

    return (
        <section className='px-3 sm:px-5 lg:px-7'>
            <div className='container mx-auto'>

                {/* Section Heading */}
                <div className='flex gap-2 items-center mt-10 mb-3'>
                    <TbTriangleInvertedFilled className='text-green-600 shrink-0' />
                    <h6 className='font-bold text-lg sm:text-xl'>
                        আজ দাম কমেছে
                    </h6>
                </div>

                {/* Responsive Product Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'>

                    {filteredData
                        .sort(
                            (a: IDecrease, b: IDecrease) =>
                                a.change.pct - b.change.pct
                        )
                        .slice(0, 6)
                        .map((item: IDecrease) => (

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
                                            <TbTriangleInvertedFilled className='text-green-600 text-sm' />
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

export default TodayDecrease;
