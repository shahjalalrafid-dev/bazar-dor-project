
import React, { Suspense } from 'react';
import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';

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
        <MarqueeText>
            {data.map((item, index) => (
                <div key={`${item.nameBn}-${index}`}>
                    <span>
                        <span>{item.categoryIcon}</span>{' '}
                        <span>{item.nameBn}</span>{' '}
                        <span>
                            {item.today} টাকা/{item.unit}
                        </span>{' '}
                        <span className="mr-2">
                            {item.change.dir === 'up' ? '▲' : item.change.dir === 'down' ? '▼' : ''}
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
