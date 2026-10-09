import React from 'react'
export interface INav {
  id: string
  slug: string
  nameBn: string
  icon: string
}
const NavLinks = async() => {

    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
    const data = await res.json();
    




  return (
    <section className='container mx-auto py-4'>
        <div className='flex gap-7'>
            {
                data.map((item: INav, index:number) => <div className='flex gap-1.5 items-center' key={index}>
                    <div className='text-[12px]'>{item.icon}</div>
                    <div className='font-semibold text-[12px]'>{item.nameBn}</div>


                </div>   )
            }

        </div>

    </section>
  )
}

export default NavLinks