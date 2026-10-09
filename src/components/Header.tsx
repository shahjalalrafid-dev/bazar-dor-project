
import React from 'react'
import { BsCart4 } from "react-icons/bs";
import NavLinks from './NavLinks';
import Link from 'next/link';
import UserInfo from './UserInfo';


const Header = async() => {
   

    const date = new Date().toLocaleDateString("bn-bd" , {
        dateStyle: "full"
    });


  return (
    <header>
        <nav className='container mx-auto py-3.5'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <BsCart4 className='text-4xl cursor-pointer bg-green-700 rounded-sm p-1.5 text-white' />
                    <div>
                        <h4 className='font-bold text-xl'>বাজার দর</h4>
                        <h6>{date}</h6>

                    </div>
                </div>
                <UserInfo />

            </div>

            <NavLinks />

        </nav>
    </header>
  )
}

export default Header