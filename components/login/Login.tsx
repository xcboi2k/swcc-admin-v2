"use client"

import Image from 'next/image'
import React from 'react'
import { useForm, Resolver } from "react-hook-form"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import LandingPageImage2 from '@/public/landing-page-images/landing-image-2.jpg'

type FormValues = {
    username: string
    password: string
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.username ? values : {},
        errors: !values.username
        ? {
            username: {
                type: "required",
                message: "This is required.",
            },
            }
        : {},
    }
}

const Login = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<FormValues>({ resolver })
    const onSubmit = async (data: any) => {
        console.log('entered data:', data)
        try {
            const response = await signIn('credentials', { username: data.username, password: data.password });
            if (response?.ok) {
                console.log('You are logged in:', response);
                // Redirect to the dashboard page
                window.location.href = '/dashboard';
            } else {
                console.log('Authentication failed');
                // Display an error message to the user
                // Set state or show a toast message
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            // Handle other errors, e.g., network error
            // Display an error message to the user
        }
    }

    return (
        <div className="w-full h-screen relative">
            <div className="absolute w-full h-full top-0 left-0 bg-[#243447BF] z-20"></div>
            <div className="bg-white shadow-md rounded px-8 py-6">
                <div className="absolute w-full h-full top-0 left-0 bg-[#243447BF] z-10">
                    <Image src={LandingPageImage2} alt='landing' className="w-full h-full object-cover" height={1080} width={1920}/>
                </div>
                
                <div className="flex flex-col justify-center items-center z-40 relative px-20 py-20">
                    <div className='w-[70%] rounded-lg bg-white p-[24px] justify-center'>
                        <div className="text-[40px] font-bold text-secondary2 text-center mt-8 w-[90%] mx-auto mb-[25px]">
                            Login
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center mb-[20px]'>
                            <div className='mb-[15px] w-[60%]'>
                                <input {...register("username")} placeholder="Enter Username"
                                className='rounded-lg border border-secondary2 p-4 w-[100%]'/>
                                {errors?.username && 
                                    <div className="text-[15px] text-secondary2">
                                        Username is required
                                    </div>
                                }
                            </div>
                            <input {...register("password")} placeholder="Enter Password" 
                            className='rounded-lg border border-secondary2 p-4 mb-[15px] w-[60%]'/>
                            <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1 mb-[15px] w-[60%]"
                                type='submit'>
                                <div className="flex justify-center items-center">
                                    <div className="text-[16px] text-primary text-center font-bold">Submit</div>
                                </div>
                            </button>
                            <div className="flex justify-center items-center mb-[15px]">
                                <div className="border border-black w-[200px] mr-4"></div>
                                <span className="text-black">or</span>
                                <div className="border border-black w-[200px] ml-4"></div>
                            </div>

                            <div className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1 mb-[15px] w-[60%]"
                                onClick={() => signIn('github')}>
                                <div className="flex justify-center items-center">
                                    <div className="text-[16px] text-primary text-center font-bold">Sign In with GitHub</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login