import React from 'react'
import BannerImage from '../assets/bazar-hero.png'
import Image from 'next/image';

const Banner = () => {

    const date = new Date().toLocaleDateString("bn-bd" , {
        dateStyle: "full"
    });

  return (
    <section>
        <div className='container mx-auto'>
            <div className='rounded-3xl bg-base-300 grid grid-cols-2'>
                <div>
                    <button className='btn rounded-xl bg-[#E2F1E7] text-green-700 font-medium'>{date}</button>
                    <h1 className='text-4xl font-bold'>আজকের বাজারের দাম এক নজরে</h1>
                    <h2 className='text-lg'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</h2>
                    <button className='btn btn-success text-white'>সব পণ্য দেখুন</button>
                </div>
                <div className='justify-self-end'>
                    <Image src={BannerImage} alt='bannerimage' width={500} height={500} ></Image>
                </div>


            </div>

        </div>
    </section>
  )
}

export default Banner