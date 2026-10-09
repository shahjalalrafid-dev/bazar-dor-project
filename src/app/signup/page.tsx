'use client'

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';

const SignUp = () => {
    const router = useRouter();

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {email, password, confirmPassword, name} = Object.fromEntries(formData.entries()) as {email: string, password: string, confirmPassword: string, name: string}
        if(password !== confirmPassword) {
            toast.error('Password do not match');
            return;
        }
        const { data, error } = await authClient.signUp.email({
            email, 
            password,
            name
            

        })
        if (data) {
            toast.success('Signed Up Successfully');
            router.push("/signin")
        }
        if (error) {
            toast.error('Sign Up Failed');
        }
    }




    return (
        <section className='bg-[#F0F5F0]'>
            <div className='container mx-auto'>
                <h3 className='font-bold text-2xl text-center'>অ্যাকাউন্ট তৈরি করুন</h3>
                <p className='text-gray-300 text-center'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                <form onSubmit={onSubmit}>
                    <fieldset className="mx-auto fieldset bg-base-200 border-base-300 rounded-box w-103.5 border p-4">


                        <label className="label">নাম</label>
                        <input name='name' type="text" className="input w-full" placeholder="যেমন: রহিম উদ্দিন" />

                        <label className="label">ইমেইল</label>
                        <input name='email' type="email" className="input w-full" placeholder="you@example.com" />

                        <label className="label">পাসওয়ার্ড</label>
                        <input name='password' type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" />

                        <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
                        <input name='confirmPassword' type="password" className="input w-full" placeholder="আবার লিখুন" />

                        <button className="btn btn-success mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                        <hr />
                        <div className='flex gap-2'>
                            <button className="btn btn-active">Google দিয়ে চালিয়ে যান</button>
                            <button className="btn btn-active"> <FaGithub /> GitHub দিয়ে চালিয়ে যান</button>
                        </div>
                        <p className='text-center'>অ্যাকাউন্ট আছে? <span className='text-green-500'>সাইন ইন করুন</span> </p>


                    </fieldset>

                </form>




            </div>
        </section>
    )
}

export default SignUp