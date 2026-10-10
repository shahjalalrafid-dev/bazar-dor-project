import React from 'react'

interface PageProps {
    params: Promise<{ slug: string }>; // In Next.js 15+, params is a Promise
}
export interface ChangeInfo {
    dir: string;
    pct: number;
}

export interface MarketInfo {
    market: string;
    division: string;
    min: number;
    max: number;
}

export interface IProductData {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: ChangeInfo;
    markets: MarketInfo[];
}
const CategoryDetails = async ({ params }: PageProps) => {


    const { slug } = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${slug}`);
    const products: IProductData = await res.json();
    
    const markets: MarketInfo[] = products.markets || [];
    



    return (
        <div>
            <div className="w-full max-w-5xl mx-auto my-8 bg-white shadow-md rounded-xl overflow-hidden border border-slate-200">
                <div className="overflow-x-auto">
                    <h3 className='text-center text-3xl'>{products.nameBn}</h3>
                    <table className="w-full text-left border-collapse text-sm text-slate-700">

                        {/* 1 Header Row */}
                        <thead>
                            <tr className="bg-slate-900 text-white uppercase text-xs tracking-wider">
                                <th className="py-3.5 px-4 font-semibold">বাজার</th>
                                <th className="py-3.5 px-4 font-semibold">বিভাগ</th>
                                <th className="py-3.5 px-4 font-semibold">সর্বনিম্ন</th>
                                <th className="py-3.5 px-4 font-semibold">সর্বাধিক</th>
                                <th className="py-3.5 px-4 font-semibold">গড়</th>
                            </tr>
                        </thead>

                        {/* 12 Data Rows (Total 13 rows with the header) */}
                        <tbody className="divide-y divide-slate-200">
                            {markets.map((row, index) => (
                                <tr key={index} className="hover:bg-slate-50 transition-colors">
                                    <td className="py-3 px-4">{row.market}</td>
                                    <td className="py-3 px-4">{row.division}</td>
                                    <td className="py-3 px-4">{row.min}</td>
                                    <td className="py-3 px-4">{row.max}</td>
                                    <td className="py-3 px-4">{(row.min + row.max)/2 }</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default CategoryDetails