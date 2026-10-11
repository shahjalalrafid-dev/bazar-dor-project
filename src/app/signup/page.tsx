
'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';

const SignUp = () => {
    const router = useRouter();

    const handleGoogleSignUp = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: '/'
        });
    };

    const handleGithubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: '/'
        });
    };

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const {
            email,
            password,
            confirmPassword,
            name
        } = Object.fromEntries(formData.entries()) as {
            email: string,
            password: string,
            confirmPassword: string,
            name: string
        };

        if (password !== confirmPassword) {
            toast.error('Password do not match');
            return;
        }

        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name
        });

        if (data) {
            toast.success('Signed Up Successfully');
            router.push("/signin");
        }

        if (error) {
            if (error.message?.includes("already")) {
                toast.error("An Account has already been opened with this email");
            } else {
                toast.error('Sign Up Failed');
            }
        }
    };

    return (
        <section className='bg-[#F0F5F0] px-3 sm:px-5 lg:px-7 py-8 sm:py-10'>
            <div className='container mx-auto'>

                {/* Heading */}
                <div className='mb-5 sm:mb-6'>
                    <h3 className='font-bold text-xl sm:text-2xl text-center'>
                        অ্যাকাউন্ট তৈরি করুন
                    </h3>

                    <p className='text-gray-500 text-sm sm:text-base text-center mt-1'>
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </div>

                {/* Sign Up Form */}
                <form onSubmit={onSubmit}>
                    <fieldset className="mx-auto fieldset bg-base-200 border-base-300 rounded-box w-full max-w-103.5 border p-4 sm:p-5">

                        <label className="label">নাম</label>
                        <input
                            required
                            name='name'
                            type="text"
                            className="input w-full"
                            placeholder="যেমন: রহিম উদ্দিন"
                        />

                        <label className="label">ইমেইল</label>
                        <input
                            required
                            name='email'
                            type="email"
                            className="input w-full"
                            placeholder="you@example.com"
                        />

                        <label className="label">পাসওয়ার্ড</label>
                        <input
                            required
                            name='password'
                            type="password"
                            minLength={8}
                            className="input w-full"
                            placeholder="কমপক্ষে ৮ অক্ষর"
                        />

                        <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
                        <input
                            required
                            name='confirmPassword'
                            type="password"
                            minLength={8}
                            className="input w-full"
                            placeholder="আবার লিখুন"
                        />

                        <button type="submit" className="btn btn-success mt-4 w-full">
                            অ্যাকাউন্ট তৈরি করুন
                        </button>

                        <div className='divider'>অথবা</div>

                        {/* Social Sign Up */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>

                            <button
                                type='button'
                                className="btn btn-active w-full text-sm"
                                onClick={handleGoogleSignUp}
                            >
                                Google দিয়ে চালিয়ে যান
                            </button>

                            <button
                                type='button'
                                onClick={handleGithubSignIn}
                                className="btn btn-active w-full text-sm"
                            >
                                <FaGithub className='text-lg shrink-0' />
                                GitHub দিয়ে চালিয়ে যান
                            </button>

                        </div>

                        <p className='text-center text-sm sm:text-base mt-2'>
                            অ্যাকাউন্ট আছে?{' '}
                            <Link href='/signin' className='text-green-500 cursor-pointer'>
                                সাইন ইন করুন
                            </Link>
                        </p>

                    </fieldset>
                </form>

            </div>
        </section>
    );
};

export default SignUp;
