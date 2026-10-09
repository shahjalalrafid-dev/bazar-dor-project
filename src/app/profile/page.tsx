'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react'

const Profile = () => {

        const { data: session } = authClient.useSession();
        const user = session?.user;
        const handleUpdateProfile = async(e:React.SubmitEvent<HTMLElement>) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newUserData = Object.fromEntries(formData.entries()) as {name: string};
            await authClient.updateUser({
                ...newUserData
            })
        }



    return (
        <section>
            <div className='container mx-auto'>
                <h3 className='font-bold text-2xl text-center mt-25'>আমার প্রোফাইল</h3>
                <p className='text-gray-300 text-center'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                <div className='flex justify-between'>
                    <div>
                        <p>{user?.name}</p>
                        <p>{user?.email}</p>
                    </div>
                    <div>
                        <button className='btn btn-error'>↩ সাইন আউট</button>
                    </div>

                </div>
                <div>
                    <h5 className='text-center font-bold text-2xl'>তথ্য</h5>
                    <form onSubmit={handleUpdateProfile}>
                        <fieldset className="mx-auto fieldset bg-base-200 border-base-300 rounded-box w-103.5 border p-4">


                            <label className="label">নাম</label>
                            <input name='name' type="text" className="input w-full" />
                            <button className='btn btn-success'>আপডেট</button>
                        </fieldset>
                    </form>


                </div>

            </div>
        </section>
    )
}

export default Profile