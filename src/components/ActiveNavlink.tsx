'use client'
import Link from 'next/link'
import React from 'react'
import { INav } from './NavLinks'
import { usePathname } from 'next/navigation'

const ActiveNavlink = ({item} : {item: INav}) => {
    const pathName = usePathname();
    const categoryPath = `/category/${item.slug}`
    const isActive = pathName === categoryPath;



  return (
    <Link
              href={`/category/${item.slug}`}
              key={item.id}
              className="shrink-0"
            >
              <div className="flex cursor-pointer items-center gap-1.5">
                <div className="text-xs">{item.icon}</div>
                {
                    isActive ? <div className="text-xs font-semibold text-green-500">{item.nameBn}</div> : <div className="text-xs font-semibold">{item.nameBn}</div>
                }
                
                
              </div>
            </Link>
  )
}

export default ActiveNavlink