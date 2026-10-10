import Link from 'next/link';
import React from 'react'
import { IoTriangleSharp } from 'react-icons/io5';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
interface PageProps {
  params: Promise<{ slug: string }>; // In Next.js 15+, params is a Promise
}
interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
}
const CategoryItem = async ({ params }: PageProps) => {

  const { slug } = await params;
  const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`);
  const products: IProduct[] = await res.json();







  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex gap-2 items-center'>

          <h6 className='font-bold text-xl'>সব পণ্য</h6>

        </div>
        <p className='text-gray-300'>মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
        <div className='grid grid-cols-3 gap-4'>
          {
            products.map((item: IProduct, index: number) =>


              <Link href={`/categorydetails/${item.id}`} key={index} >


                <div className=' cursor-pointer bg-gray-400 rounded-2xl p-4'>
                  <div className='flex gap-2'>
                    <div className='w-12 h-12 bg-base-200'>
                      {item.categoryIcon}
                    </div>
                    <div>
                      <p>{item.nameBn}</p>
                      <p>প্রতি কেজি</p>
                    </div>

                  </div>
                  <p>আজকের দাম</p>
                  <div className='flex justify-between'>
                    <p>{item.today} টাকা</p>
                    <div className='flex items-center gap-1'>
                      {
                        item.change.dir === "down" ? <TbTriangleInvertedFilled className='text-green-600' /> : <IoTriangleSharp className='text-red-400' />
                      }

                      <p>{item.change.pct}%</p>

                    </div>
                  </div>


                </div>



              </Link>





            )

          }







        </div>

      </div>
    </section >
  )
}

export default CategoryItem