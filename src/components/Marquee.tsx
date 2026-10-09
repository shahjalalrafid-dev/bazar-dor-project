
import React from 'react'
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

export interface IMarquee {
    categoryIcon: string,
    nameBn: string,
    unit: string,
    today: number,
    change: {
        dir: string;
        pct: number;
    }


}


const Marquee = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data = await res.json();



    return (
        <section>
            <MarqueeText>
                {
                    data.map((item: IMarquee, index: number) => <div key={index}><span>
                        <span>{item.categoryIcon}</span>
                        <span>{item.nameBn}</span>
                        <span>{item.today} টাকা/কেজি</span>
                        <span className='mr-2'>{item.change.pct}</span>


                    </span></div> )
                }
            </MarqueeText>
        </section>
    )
}

export default Marquee