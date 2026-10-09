'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';

const SignIn = () => {
    const router = useRouter();
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",

        });
    }
    const handleGithubSignIn = async () => {
         await authClient.signIn.social({
            provider: "github"
        })
    }
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData.entries()) as { email: string, password: string };

        const { data, error } = await authClient.signIn.email({
            email,
            password
        })
        if (data) {
            toast.success('Signed in Successfully');
            router.push('/');
        }
        if (error) {
            toast.error('Credential Mismatch');
        }
    }




    return (
        <section className='bg-[#F0F5F0]'>
            <div className='container mx-auto'>
                <h3 className='font-bold text-2xl text-center'>সাইন ইন</h3>
                <p className='text-gray-300 text-center'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                <form onSubmit={onSubmit}>
                    <fieldset className="mx-auto fieldset bg-base-200 border-base-300 rounded-box w-103.5 border p-4">
                        <label className="label">ইমেইল</label>
                        <input name='email' type="email" className="input w-full" placeholder="you@example.com" />

                        <label className="label">পাসওয়ার্ড</label>
                        <input name='password' type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" />


                        <button className="btn btn-success mt-4">সাইন ইন</button>
                        <hr />
                        <div className='flex gap-2'>
                            <button className="btn btn-active" onClick={handleGoogleSignIn}>Google দিয়ে চালিয়ে যান</button>
                            <button className="btn btn-active" onClick={handleGithubSignIn}> <FaGithub /> GitHub দিয়ে চালিয়ে যান</button>
                        </div>
                        <p className='text-center'>অ্যাকাউন্ট নেই? <Link href={'/signup'} ><span className='text-green-500 cursor-pointer'>সাইন আপ করুন</span></Link>  </p>

                    </fieldset>
                </form>


            </div>
        </section>
    )
}

export default SignIn