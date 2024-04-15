import Image from 'next/image'
import React from 'react'

import AdminImage from '@/public/landing-page-images/admin-image-1.png'

const AdminApplication = () => {
    return (
        <div className="flex flex-col py-10 px-20">
            <div className="h-[500px] flex py-10 px-20 bg-secondary1 rounded-3xl">
                <div className="
                    w-1/2 flex flex-col gap-4"
                >
                    <div className="text-[48px] font-bold text-primary">Apply as Admin</div>
                    <p className="text-[18px] text-white">
                    Want to be an administrator? Take the first step by sending us your resume at admin_application@swcc.com. Show us what you&apos;re made of – highlight your skills, experience, and passion for making an impact. 
                    Don&apos;t miss out on this opportunity to join a dynamic team dedicated to excellence. Your future starts here!
                    </p>
                </div>
                <div className='w-1/2 relative'>
                    <div className="absolute w-full top-0 left-0 z-10">
                        <Image src={AdminImage} alt='landing' className="object-contain h-[400px] w-[700px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminApplication