import React from 'react'
import { IoTriangleSharp } from 'react-icons/io5'

const loading = () => {
  return (
    <section className='px-7'>
            <div className='container mx-auto'>
                {/* Section Header */}
                <div className='flex gap-2 items-center mb-3'>
                    <IoTriangleSharp className='text-red-400' />
                    <h6 className='font-bold text-xl'>আজ দাম বেড়েছে</h6>
                </div>

                {/* 3 Columns Grid Layout */}
                <div className='grid grid-cols-3 gap-4'>
                    
                    {/* Skeleton Card 1 */}
                    <div className='bg-base-300 rounded-2xl p-4'>
                        <div className='flex gap-2'>
                            <div className='w-12 h-12 bg-base-200 rounded-xl skeleton'></div>
                            <div className='flex-1 space-y-2 py-1'>
                                <div className='h-4 bg-base-200 rounded w-3/4 skeleton'></div>
                                <div className='h-3 bg-base-200 rounded w-1/2 skeleton'></div>
                            </div>
                        </div>
                        <div className='h-3 bg-base-200 rounded w-20 mt-4 mb-2 skeleton'></div>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 bg-base-200 rounded w-24 skeleton'></div>
                            <div className='flex items-center gap-1'>
                                <div className='w-4 h-4 bg-base-200 rounded-full skeleton'></div>
                                <div className='h-4 bg-base-200 rounded w-12 skeleton'></div>
                            </div>
                        </div>
                    </div>

                    {/* Skeleton Card 2 */}
                    <div className='bg-base-300 rounded-2xl p-4'>
                        <div className='flex gap-2'>
                            <div className='w-12 h-12 bg-base-200 rounded-xl skeleton'></div>
                            <div className='flex-1 space-y-2 py-1'>
                                <div className='h-4 bg-base-200 rounded w-3/4 skeleton'></div>
                                <div className='h-3 bg-base-200 rounded w-1/2 skeleton'></div>
                            </div>
                        </div>
                        <div className='h-3 bg-base-200 rounded w-20 mt-4 mb-2 skeleton'></div>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 bg-base-200 rounded w-24 skeleton'></div>
                            <div className='flex items-center gap-1'>
                                <div className='w-4 h-4 bg-base-200 rounded-full skeleton'></div>
                                <div className='h-4 bg-base-200 rounded w-12 skeleton'></div>
                            </div>
                        </div>
                    </div>

                    {/* Skeleton Card 3 */}
                    <div className='bg-base-300 rounded-2xl p-4'>
                        <div className='flex gap-2'>
                            <div className='w-12 h-12 bg-base-200 rounded-xl skeleton'></div>
                            <div className='flex-1 space-y-2 py-1'>
                                <div className='h-4 bg-base-200 rounded w-3/4 skeleton'></div>
                                <div className='h-3 bg-base-200 rounded w-1/2 skeleton'></div>
                            </div>
                        </div>
                        <div className='h-3 bg-base-200 rounded w-20 mt-4 mb-2 skeleton'></div>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 bg-base-200 rounded w-24 skeleton'></div>
                            <div className='flex items-center gap-1'>
                                <div className='w-4 h-4 bg-base-200 rounded-full skeleton'></div>
                                <div className='h-4 bg-base-200 rounded w-12 skeleton'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default loading