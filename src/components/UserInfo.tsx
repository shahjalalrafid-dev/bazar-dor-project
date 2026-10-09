'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link'
import React from 'react'


const UserInfo = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async() => {
        await authClient.signOut();
    }



    return (
        <div className='flex gap-2'>
            {
                user ? <select defaultValue="Pick a font" className="select select-ghost">
                    <option>{user?.name}</option>
                    <option disabled={true}>{user?.email}</option>
                    
                    <Link href={'/profile'} ><option>আমার প্রোফাইল</option></Link> 
                    <option onClick={handleSignOut} >সাইন আউট</option>
                    
                </select> : <> <Link href={'/signin'}  ><button className="btn btn-outline font-semibold text-sm">সাইন ইন</button></Link>
                    <Link href={'/signup'}><button className="btn btn-success font-semibold text-sm">সাইন আপ</button></Link></>

            }





        </div>
    )
}

export default UserInfo