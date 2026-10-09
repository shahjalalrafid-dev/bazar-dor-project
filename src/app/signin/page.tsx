import React from 'react'
import { FaGithub } from "react-icons/fa";

const SignIn = () => {
    return (
        <section className='bg-[#F0F5F0]'>
            <div className='container mx-auto'>
                <h3 className='font-bold text-2xl text-center'>সাইন ইন</h3>
                <p className='text-gray-300 text-center'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>

                <fieldset className="mx-auto fieldset bg-base-200 border-base-300 rounded-box w-103.5 border p-4">


                    

                    <label className="label">ইমেইল</label>
                    <input type="email" className="input w-full" placeholder="you@example.com" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" />


                    <button className="btn btn-success mt-4">সাইন ইন</button>
                    <hr />
                    <div className='flex gap-2'>
                        <button className="btn btn-active">Google দিয়ে চালিয়ে যান</button>
                        <button className="btn btn-active"> <FaGithub /> GitHub দিয়ে চালিয়ে যান</button>
                    </div>
                    <p className='text-center'>অ্যাকাউন্ট নেই?  <span className='text-green-500'>সাইন আপ করুন</span> </p>

                </fieldset>

            </div>
        </section>
    )
}

export default SignIn