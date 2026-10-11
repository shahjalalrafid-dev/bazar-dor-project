

import { BsCart4 } from "react-icons/bs";
import NavLinks from './NavLinks';

import UserInfo from './UserInfo';
import CurrentDate from './CurrentDate';
import { Suspense } from "react";
import Link from "next/link";


const Header = () => {





    return (
        <header className="px-7">
            <nav className='container mx-auto py-3.5'>
                <div className='flex justify-between'>
                    <Link href={'/'} >
                        <div className='flex gap-2 items-center'>
                            <BsCart4 className='text-4xl cursor-pointer bg-green-700 rounded-sm p-1.5 text-white' />
                            <div>
                                <h4 className='font-bold text-xl'>বাজার দর</h4>

                                <Suspense fallback={<h6>তারিখ লোড হচ্ছে...</h6>}>
                                    <CurrentDate />
                                </Suspense>


                            </div>
                        </div>

                    </Link>

                    <UserInfo />

                </div>
                <Suspense fallback={<div>পণ্য লোড হচ্ছে...</div>}>
                    <NavLinks />
                </Suspense>


            </nav>
        </header>
    )
}

export default Header