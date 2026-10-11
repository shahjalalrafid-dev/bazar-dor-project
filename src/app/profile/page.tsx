'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
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
    const handleSignOut = async() => {
            await authClient.signOut();
    }

    return (
        <section className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:px-6">
            <div className="container mx-auto max-w-5xl">

                {/* Page Heading */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#26332b]">
                        আমার প্রোফাইল
                    </h3>
                    <p className="mt-1 text-sm text-[#737d75]">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* User Information */}
                <div className="mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-[#dfe7df] bg-[#fbfcfb] p-5 sm:flex-row sm:items-center sm:px-6">
                    <div>
                        <p className="text-xl font-semibold text-[#26332b]">
                            {user?.name}
                        </p>
                        <p className="mt-1 break-all text-sm text-[#69736b] sm:text-base">
                            {user?.email}
                        </p>
                    </div>
                    <Link href={'/'}>
                    <button onClick={handleSignOut} className="btn h-10 min-h-0 rounded-lg border border-red-500 bg-transparent px-4 text-sm font-medium text-red-500 shadow-none hover:bg-red-500 hover:text-white">
                        ↩ সাইন আউট
                    </button>
                    </Link>
                    
                </div>

                {/* Profile Form */}
                <div className="rounded-2xl border border-[#dfe7df] bg-[#fbfcfb] p-5 sm:p-8">
                    <h5 className="mb-8 text-lg font-bold text-[#26332b]">
                        তথ্য
                    </h5>

                    <form onSubmit={handleUpdateProfile}>
                        <fieldset className="space-y-4">

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#26332b]">
                                    নাম
                                </label>

                                <input
                                    name="name"
                                    type="text"
                                    className="h-[38px] w-full rounded-lg border border-[#dfe7df] bg-transparent px-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn h-10 min-h-0 w-full rounded-lg border-none bg-[#078b43] text-sm font-semibold text-white shadow-[0_3px_3px_rgba(0,0,0,0.2)] hover:bg-[#067638]"
                            >
                                আপডেট
                            </button>

                        </fieldset>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Profile
