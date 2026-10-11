'use client'
import React, { useState } from 'react'
import { IProduct, SortOption } from './product';
import Link from 'next/link';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { IoHomeOutline, IoTriangleSharp } from 'react-icons/io5';
import SortBy from './SortBy';
interface CategoryProductProps {
    products: IProduct[];
}

const CategoryProduct = ({ products }: CategoryProductProps) => {

    const [sortBy, setSortBy] = useState<SortOption>("default");
    const filteredProducts = [...products]

    if (sortBy === "mintomax") {
        filteredProducts.sort((a, b) => a.today - b.today);
    } else if (sortBy === "maxtomin") {
        filteredProducts.sort((a, b) => b.today - a.today);
    }
    




    return (


        <section>
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between">
                    <div>
                        <h6 className="text-xl font-bold">সব পণ্য</h6>

                        <p className="mb-4 text-gray-500">
                            মোট {products.length}টি পণ্য দেখানো হচ্ছে
                        </p>
                    </div>
                    <div>
                        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
                    </div>
                </div>


                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((item) => (
                        <Link href={`/categorydetails/${item.id}`} key={item.id}>
                            <div className="cursor-pointer rounded-2xl bg-gray-100 p-4 transition hover:shadow-md">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl">
                                        {item.categoryIcon}
                                    </div>

                                    <div>
                                        <p className="font-semibold">{item.nameBn}</p>
                                        <p className="text-sm text-gray-500">
                                            প্রতি {item.unit}
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-gray-500">
                                    আজকের দাম
                                </p>

                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-bold">
                                        {item.today} টাকা
                                    </p>

                                    <div className="flex items-center gap-1">
                                        {item.change.dir === "down" ? (
                                            <TbTriangleInvertedFilled className="text-green-600" />
                                        ) : item.change.dir === "up" ? (
                                            <IoTriangleSharp className="text-red-500" />
                                        ) : null}

                                        <p
                                            className={
                                                item.change.dir === "down"
                                                    ? "text-green-600"
                                                    : item.change.dir === "up"
                                                        ? "text-red-500"
                                                        : "text-gray-500"
                                            }
                                        >
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
    )
}

export default CategoryProduct