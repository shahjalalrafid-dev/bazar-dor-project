
import React, { Suspense } from 'react';
import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';
import { IoTriangleSharp } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";

export interface IMarquee {
    categoryIcon: string;
    nameBn: string;
    unit: string;
    today: number;
    change: {
        dir: string;
        pct: number;
    };
}

const MarqueeContent = async () => {
    const res = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/products',
        {
            cache: 'no-store',
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch market prices');
    }

    const data: IMarquee[] = await res.json();

    return (
        <MarqueeText className='py-2' duration={30} pauseOnHover= {true} >
            {data.map((item, index) => (
                <div className='cursor-pointer' key={`${item.nameBn}-${index}`}>
                    <span>
                        <span>{item.categoryIcon}</span>{' '}
                        <span>{item.nameBn}</span>{' '}
                        <span>
                            {item.today} টাকা/{item.unit}
                        </span>{' '}
                        <span className="mr-8">
                            {item.change.dir === 'up' ? <IoTriangleSharp className='inline-block text-red-400 text-sm mb-1 mr-1' /> : item.change.dir === 'down' ? <TbTriangleInvertedFilled  className='inline-block text-green-600 text-sm mb-1 mr-1' /> : ''}
                            {item.change.pct}%
                        </span>
                    </span>
                </div>
            ))}
        </MarqueeText>
    );
};

const Marquee = () => {
    return (
        <section>
            <Suspense
                fallback={
                    <div>বাজারের দাম লোড হচ্ছে...</div>
                }
            >
                <MarqueeContent />
            </Suspense>
        </section>
    );
};

export default Marquee;
